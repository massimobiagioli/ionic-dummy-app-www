angular.module('starter.controllers', ['starter.services'])

.controller('AppCtrl', function($scope, SettingsFactory) {        
    $scope.settingsData = SettingsFactory.loadSettings();        
})

.controller('ControlPanelCtrl', function($scope) {
    
})

.controller('SettingsCtrl', function($scope, $location, SettingsFactory) {        
    $scope.saveSettings = function() {        
        SettingsFactory.saveSettings($scope.settingsData);
        $location.path('/app/controlPanel');        
    }
});