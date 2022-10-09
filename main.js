// Import axios to do the https requests
const axios = require("axios");

// Set the variable for the url to the pushbullet api
let pbapi = "https://api.pushbullet.com/v2/pushes";

// Export the main function
/**
 * @param {String} token This should be your api acces token from PushBullet itself
 */

exports.PushBullet = function(token) {
    // Check if input values are the right type or null
    if (
        (!token || typeof(token) != "string")
        ) {
        throw new Error("Either token, location or type is not defined as parameter in the PushBullet function.");
    }

    // Set configuration for the token and post request
    const Config = {
        headers: {
            "Access-Token": token,
            "Content-Type": "application/json"
        }
    }

    // Export the function to set the data type for post requests
    /**
     * @param {String} type The type of push you want to make. Options:
     * - note: requires you to set the title and the body of the push
     * - link: requires you to set the title of the link, the body of the push and the url
     * - file: requires you to set the title of the push, the file name, the file type, and the file url
     * 
     * @param {String} msg The content of the message you want to push
     * 
     * @param {String} title The title of the push you want to make
     * 
     * @param {String} idenType The device, cahnnel or really whatever thing you want to send the push to Options:
     * - device_iden
     * - channel_tag
     * - client_iden
     * 
     * @param {String} iden Your device iden or channel_tag
     * 
     * @param {String} url Optional parameter, if you want to push a link or file with the variable "type" set to "link" or "file"
     * 
     * @param {String} fileName Optional parameter, if you want to push a file with the variable "type" set to "file"
     * 
     * @param {String} fileType Optional parameter, the MIME type of the file you want to push
     * 
     */

    exports.PostBullet = (type, msg, title, idenType, iden, url, fileName, fileType) => {
        // Check if input values are the right type or null
        if (
            (!type || typeof(type) != "string") || 
            (!msg || typeof(msg) != "string") ||
            (!title || typeof(title) != "string") ||
            (!idenType || typeof(idenType) != "string") ||
            (!iden || typeof(iden) != "string")
            ) {
            throw new Error("Either type, msg, title, idenType or iden is not defined as parameter in the PushData function.");
        }

        // Define data object for push
        let Data = {};

        if (type == "link") {
            Data = {
                "type": type,
                "url": url,
                "body": msg,
                "title": title,
                [idenType]: iden
            }
        } else if (type == "file") {
            Data = {
                "type": type,
                "file_url": url,
                "file_name": fileName,
                "file_type": fileType,
                "body": msg,
                "title": title,
                [idenType]: iden
            }
        } else {
            Data = {
                "type": type,
                "body": msg,
                "title": title,
                [idenType]: iden
            }
        }

        // Push the post request
        axios.post(pbapi, Data, Config)
            .catch( (err) => {
                console.log(err);
            });
    }
}

