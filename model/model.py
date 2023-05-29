import pandas as pd
import numpy as np
import os
from joblib import load


class Model:
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
        
        # blacklist
        self.blacklist = set()
    
    def transform(self, X):
        '''
        Returns the Principal Component Scores for the given test data
        '''
        if 'release_date' in X.columns:
            X = self.convert_input(X)   
        return self.model.transform(X)
    
    def get_10_songs(self, X):
        '''
        Returns the top 10 most similar songs to recommend
        
            Parameters: X, Pandas DataFrame that consists of the information that can be pulled from spotify api
        '''
        if 'release_date' in X.columns:
            X = self.convert_input(X)
        pred = self.model.transform(X)
        distances = self.get_euclidean_dist(pred)

        # smallest 100 indexes
        ind = np.argpartition(distances, 101)[:100]
        np.random.shuffle(ind)
        indexes_to_keep = []
        
        for song_idx in ind:
            cur_song = self.data.iloc[[song_idx]]
            if len(indexes_to_keep) == 10:
                break
            if cur_song.index[0] in self.blacklist:
                continue
            else:
                indexes_to_keep.append(song_idx)
        req_df = self.data.iloc[indexes_to_keep]
        return req_df[['name', 'artists']]
        
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
        return
    
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
        