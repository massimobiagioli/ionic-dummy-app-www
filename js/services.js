angular.module('starter.services', [])

.factory('SettingsFactory', function() {    
    var data = {};
    
    var loadSettings = function() {
        this.data = (window.localStorage.getItem('settingsData') ? JSON.parse(window.localStorage.getItem('settingsData')) : {});              
        return this.data;  
    };      
    
    var saveSettings = function(newData) {
        this.data = newData;
        window.localStorage.setItem('settingsData', JSON.stringify(this.data));
    }
    
    var getSettings = function() {
        return this.data;
    }
    
    return {        
        loadSettings: loadSettings,
        saveSettings: saveSettings,
        getSettings: getSettings
    }           
});
