import numpy as np
import pandas as pd
import clustering_model
import deepLearning

global_clustering_model = clustering_model.Clustering_Model()
spot_getter = clustering_model.SpotifyGetter()

class User():
    # Assume that will get info from spotify
    def __init__(self, playlist):
        self.playlist = playlist
        self.playlist_labels = np.ones(shape=(len(playlist), 1))
        self.song_recommender = deepLearning.SongRecommender(global_clustering_model.transform(self.playlist), self.playlist_labels)
        
        self.new_playlist = None
        self.new_playlist_labels = None
        
    # Recommends 10 songs
    def get_recommendations(self, blacklist=[]):
        '''
        Helper function
        ---------------
        This method must be done together with get_feedback
        '''
        rand_idx = np.random.randint(0, len(self.playlist))
        
        # getting 100 similar songs
        songs_info, songs = global_clustering_model.get_100_songs(self.playlist.iloc[[rand_idx]], blacklist=[]) 
        
        # get NN opinion on suitability
        recommendation = self.song_recommender.get_recommendations(global_clustering_model.transform(songs_info))
        
        # return_songs and their information, for first 10 indexes
        return_songs = songs[recommendation][:10]
        return_songs_info = songs_info[recommendation][:10]
        
        if len(return_songs) == 0:
            return None
        
        self.new_playlist = return_songs_info
        return return_songs
        
    def receive_feedback_train(self, feedback):
        '''
        Helper function
        ---------------
        Receive feedback from the user about the 10 songs
        '''
        if self.new_playlist is None:
            return
        
        self.new_playlist_labels = feedback
        self.train_model()
        return
    
    def train_model(self):
        '''
        Let the model learn new preferences
        '''
        new_data = self.new_playlist
        new_labels = self.new_playlist_labels
        
        if new_data is None or new_labels is None:
            return

        self.song_recommender.add_new_data(global_clustering_model.transform(new_data), new_labels)
        self.new_playlist = None
        self.new_playlist_labels = None
        return
    