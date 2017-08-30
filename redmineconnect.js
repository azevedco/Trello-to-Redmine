var host = "";
var api_Key = "";

function setAPIKey(key) {
  this.apiKey = key;
};

function getApiKey() {
  return this.apiKey;
};

function setHost(host) {
  this.host = host;
};

function getHost() {
  return this.host;
};

$(document).ready(function() {
    //$.ajax({
    $("#KeyBtn").click(function() {
        api_Key = $("#ApiKeyText").val();
        alert(api_Key);
        $.ajax({
            url: window.base_url + "http://135.23.35.134:8099/redmine/projects.json?key=" + api_Key,
            type: 'GET',
            crossDomain: true,
            dataType: 'jsonp',
            success: function (data) {
                alert('Success!');
                $.each(data.projects, function (index, project) {
                    if (project.status === 1) {
                        $("#ProjectSelect").append('<option value="' + project.id + '">' + project.name + '</option>');
                    }
                    ;
                });
            },
            error: function () {
                alert('Failed!');
            },
        });
    });
});