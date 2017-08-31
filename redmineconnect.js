var base_url = "http://135.23.35.134:8099/redmine";
var api_Key = "3edf27544b0dc1a88edc6dd6da00245dc05ca0b5";

var localProjectId = "";

var loadIssues = function(projectId) {
    $.ajax({
        url: window.base_url + "/issues.json?key=" + window.api_Key + "&project_id=" + projectId,
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
        window.api_Key = $("#ApiKeyText").val();
        window.base_url = $("#HostText").val();
        $.ajax({
            url: window.base_url + "/projects.json?key=" + window.api_Key,
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









