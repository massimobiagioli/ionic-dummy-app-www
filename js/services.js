angular.module('starter.services', [])

.factory('SettingsFactory', function() {    
    var data = {};
    
    var loadSettings = function() {
        this.data = {
            serverAddress: 'xxx.xxx.xxx.xxx',
            serverPort: 1234            
        };
              
        return this.data;  
    };      
    
    var saveSettings = function(newData) {
        this.data = newData;
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
