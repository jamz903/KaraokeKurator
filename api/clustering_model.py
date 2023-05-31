import pandas as pd
import numpy as np
import os
from joblib import load


class Clustering_Model:
    '''
    A class to function for the ML model
    ...
    Attributes
    ----------
    model: sklearn.Pipeline
        The ML model being used
    data: pd.DataFrame
        The training data that was used
    train_scores: numpy.array 
        The Principal Component Scores for each training data
    blacklist: set
        The set that holds the indexes of all the songs that are downvoted
        
    Methods
    ----------
    transform(self, X)
        Returns the Principal Component Score for the song given
        
    get_10_songs(self, X)
        Returns 10 similar songs
    
    get_euclidean_distance(self, pred)
        Returns the euclidean distance of the given song to all train_scores
        
    convert_input(self, X)
        Converts 'release_date' feature into 'year'
        
    downvote(self, song_nums)
        Blacklists certain songs
    '''
    def __init__(self):
        
        cwd = os.getcwd()
        
        # load the model
        model_path = cwd + '/clustering_model.joblib'
        self.model = load(model_path)
        
        # load the data
        train_data_path = cwd + '/Training_data.csv'
        self.data = pd.read_csv(train_data_path, index_col=0)
        
        # get the train scores to be used and kept in memory
        self.train_scores = self.model.transform(self.data)

    
    def transform(self, X):
        '''
        Returns the Principal Component Scores for the given test data
        '''
        if 'release_date' in X.columns:
            X = self.convert_input(X)   
        return self.model.transform(X)
    
    def get_100_songs(self, X, blacklist):
        '''
        Returns the top 10 most similar songs to recommend
        
            Parameters: X, Pandas DataFrame that consists of the information that can be pulled from spotify api
                        blacklist, list of song nums that are blacklisted
        '''
        pred = self.transform(X)
        distances = self.get_euclidean_dist(pred)
        blacklist = set(blacklist)

        # smallest 500 indexes
        ind = np.argpartition(distances, 501)[:500]
        np.random.shuffle(ind)
        indexes_to_keep = []
        
        for song_idx in ind:
            cur_song = self.data.iloc[[song_idx]]
            if len(indexes_to_keep) == 100:
                break
            if cur_song.index[0] in blacklist:
                continue
            else:
                indexes_to_keep.append(song_idx)
        req_df = self.data.iloc[indexes_to_keep]
        
        return req_df, req_df[['name', 'artists']]
        
    def get_euclidean_dist(self, pred):
        '''
        Returns the euclidean distance between the prediction point and the points of all the training data
        
            Parameters: pred, numpy array that consists of all the principal component scores
        '''
        inter_score = self.train_scores - pred
        inter_score **= 2
        distances = np.sum(inter_score, axis=1)
        return distances
    
    def convert_input(self, X):
        '''
        Converts the release date of the song to include only the year
        '''
        dates = pd.to_datetime(X['release_date'], format='mixed').dt.strftime('%Y')
        X = X.drop('release_date', axis=1)
        X['year'] = dates
        return X
    
    def downvote(self, song_num):
        '''
        Add the song number that the user dislikes to the blacklist, so as not to recommend again
        '''
        if type(song_num) is list:
            for item in song_num:
                self.blacklist.add(item)
        else:
            self.blacklist.add(song_num)
        return
    
class SpotifyGetter:
    def get_tracks(self, playlist_link):
        # will get a list of unique IDs
        # using the unique IDs, get a list of dictionaries using .get_audio_features()
        # labels are all 1s for now
        return pd.DataFrame(playlist_link), np.ones(shape=(len(playlist_link), 1)) 
