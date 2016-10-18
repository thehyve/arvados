$(document).
    on('click', '.component-detail-panel', function(event) {
      var href = $($(event.target).attr('href'));
      if ($(href).attr("class").split(' ').indexOf("in") == -1) {
        return;   // collapsed; nothing more to do
      }

      var content_div = href.find('.work-unit-component-detail-body');
      var content_url = href.attr('content-url');
      $.ajax(content_url, {dataType: 'html'}).
          done(function(data, status, jqxhr) {
              content_div.html(data);
          }).fail(function(jqxhr, status, error) {
              content_div.html(error);
          });
      });
