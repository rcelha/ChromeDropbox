/**
 * handle the dropbox api
 */

var DropboxAPI = function(){
    this.id = 'myId';
    this.urls = {
        request_token: 'https://api.dropbox.com/1/oauth/request_token',
        authorize: 'https://www.dropbox.com/1/oauth/authorize',
        access_token: 'https://api.dropbox.com/1/oauth/access_token',
    };
    this.consumer_key = 'rl22ii3duzn55ay';
    this.consumer_secret = '8tluw366i4llwhb';
    this.oauth_token_secret = '';
    
    this.app_type = "dropbox";
    
    this.ls = function(path, callback){
        url = "https://api.dropbox.com/1/metadata/"+ this.app_type ;
        
        var requestData = this.getRequestData(url, {});
        OAuthHelper.utils.jsonRequest(
            requestData.message.action,
            requestData.message.method,
            requestData.message.parameters,
            callback);
    };
};

// Extending the OAuth
DropboxAPI.prototype = new OAuthHelper.OAuth();
 
var DropBoxFS = new DropboxAPI();