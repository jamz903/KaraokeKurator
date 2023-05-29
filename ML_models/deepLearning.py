import os
import tensorflow as tf
import numpy as np

class SongRecommender:
    def __init__(self, X, y):
        '''
        X is the reduced_dimensionality X_train
        y is the labels
        '''
        cwd = os.getcwd()
        model_path = cwd + '\deep_learning.h5'
                
        # neural network
        self.nn = tf.keras.models.load_model(model_path)
        self.nn.fit(X, y, epochs=5, verbose=0)
        
        # data
        self.data = X
        
        # labels
        self.labels = np.ones(shape=(len(X), 1))
        
        # og length
        self.length = len(X)
        
    def add_new_data(self, X_new, y_new):
        '''
        X_new is the new reduced_dimensionality (always have to be coupled with model.transform)
        y_new is a 2 dimensional labels shape = (x, 1)
        '''
        self.data = np.concatenate([self.data, X_new], axis=0)
        self.labels = np.concatenate([self.labels, y_new], axis=0)
        if len(self.data) - self.length >= 30:
            self.nn.fit(self.data, self.labels, epochs=5, verbose=0)
            self.length = len(self.data)
        return
        
    def predict(self, X):
        '''
        X is the reduced dimensions array (always coupled with model.transform)
        '''
        probabilities = self.nn.predict(X)
        return probabilities
    
    def get_recommendations(self, X):
        probabilities = self.predict(X)
        # returns a boolean array => will use it to pair with the clustering model
        return (probabilities > 0.55).astype(bool)
    
'''
Input: Reduced dimensionality numpy array
'''