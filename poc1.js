$.ajax({
            url: "https://devcloud.huaweicloud.com/projectman/v1/member/batchDeleteMember?_=1569569559398",
            data: JSON.stringify({"test":"test"}),
            contentType: "application/json; charset=utf-8",
            type: "POST",
            dataType: "json",
            error: function (request, textStatus, errorThrown) {
               cftk = request.getResponseHeader('devclouddevui420cftk');
               callback(cftk);
            }
});

