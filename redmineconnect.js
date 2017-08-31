var host = "";
var api_Key = "";

var localProjectId = "";

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

var loadIssues = function(projectId) {
    $.ajax({
        url: host + "/issues.json?key=" + api_Key + "&project_id=" + projectId,
        type: 'GET',
        crossDomain: true,
        dataType: 'jsonp',
        success: function (data) {
            $("#Issues").empty();
            $.each(data.issues, function (index, issue) {
                $("#Issues").append("<tr issueId='" + issue.id + "'><td class='project'>" + issue.project.name
                    + "</td><td class='idCell'>" + issue.id
                    + "</td><td class='subject'>" + issue.subject
                    + "</tr>");
            });
        },
        error: function () {
            alert('Failed!');
        },
    });
};

var createIssue = function (projectId, subject) {
    $.ajax({
        url: "/commands/create_issue",
        type: 'POST',
        data: JSON.stringify({project_id: projectId, subject: subject}),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        success: function (data) {
            loadIssues(projectId);
        },
        error: function () {
            alert('Failed!');
        },
    });
};

$(document).ready(function() {
    //$.ajax({
    $("#KeyBtn").click(function() {
        api_Key = $("#ApiKeyText").val();
        host = $("#HostText").val();
        $.ajax({
            url: host + "/projects.json?key=" + api_Key,
            type: 'GET',
            crossDomain: true,
            dataType: 'jsonp',
            success: function (data) {
                $.each(data.projects, function (index, project) {
                    if (project.status === 1) {
                        $("#ProjectSelect").append('<option value="' + project.id + '">' + project.name + '</option>');
                    }
                    ;
                });
            },
            error: function () {
                alert('Failed to gain connection to Redmine.');
            },
        });
    });
    
    $("#ProjectSelect").change(function() {
        localProjectId = $("#ProjectSelect option:selected").attr('value');
        loadIssues(localProjectId);
    });
    
    $("#AddIssue").click(function () {
        localProjectId = $("#ProjectSelect option:selected").attr('value');
        createIssue(localProjectId, 'New issue'); 
    });
    
});









