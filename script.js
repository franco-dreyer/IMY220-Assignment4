$(document).ready(() => {
    $("#left").on('click', function(){
        let messageText = $('#message').val();

        if (messageText !== "") {
            let newMessage = $("<div></div>");
            newMessage.addClass("col-4 offset-4 mb-3 rounded message bg-success");
          
            let youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?([^&?]+)(?:\?si=[^&?]+)?/;
            let match = messageText.match(youtubeRegex);
          
            if (match) {
                let videoId = match[1];

                let parts = messageText.split(match[0]);
                if (parts[0]) {
                    let textDiv = $("<div></div>");
                    textDiv.text(parts[0]);
                    newMessage.append(textDiv);
                }
          
                let iframe = $("<iframe></iframe>");
                iframe.attr("src", "https://www.youtube.com/embed/" + videoId);
                iframe.attr("width", "100%");
                iframe.attr("height", "315px");
                iframe.attr("frameborder", "0");
                iframe.attr("allowfullscreen", "true");
                newMessage.append(iframe);
            } else {
                newMessage.text(messageText);
            }
          
            $("div.messages").append(newMessage);
          
            $("#message").val("");
        }
          
    });

    $("#right").on('click', function(){
        let messageText = $('#message').val();

        if (messageText !== "") {
            let newMessage = $("<div></div>");
            newMessage.addClass("col-4 offset-4 mb-3 rounded message bg-info");
          
            let youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?([^&?]+)(?:\?si=[^&?]+)?/;
            let match = messageText.match(youtubeRegex);
          
            if (match) {
                let videoId = match[1];

                let parts = messageText.split(match[0]);
                if (parts[0]) {
                    let textDiv = $("<div></div>");
                    textDiv.text(parts[0]);
                    newMessage.append(textDiv);
                }

                let iframe = $("<iframe></iframe>");
                iframe.attr("src", "https://www.youtube.com/embed/" + videoId);
                iframe.attr("width", "100%");
                iframe.attr("height", "315px");
                iframe.attr("frameborder", "0");
                iframe.attr("allowfullscreen", "true");
                newMessage.append(iframe);
            } else {
                newMessage.text(messageText);
            }
          
            $("div.messages").append(newMessage);
          
            $("#message").val("");
        }
    });
});