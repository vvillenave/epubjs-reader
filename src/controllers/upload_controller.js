EPUBJS.reader.UploadController = function () {
    var reader = this;
    var $upload = $("#upload");

    $("#upload-book").click(function (e) {
        if (e.handleObj.guid === 1)
            $upload.click();
    });

    $upload.change(function (e) {
        if (e.target.files.length === 0)
            return;

        if (window.FileReader) {
            var fileReader = new FileReader();
            fileReader.readAsArrayBuffer(e.target.files[0]);
            fileReader.onload = function (e) {
                reader = ePubReader(e.target.result, {
                    restore: true
                });
            };
        } else {
            alert("Your browser does not support the required features.\n" +
                "Please use a modern browser such as Google Chrome, or Mozilla Firefox.");
        }
    });
};