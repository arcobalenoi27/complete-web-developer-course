$('#exampleModalLong').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget);
  var recipient = button.data('name');
  var modal = $(this);
  modal.find('.modal-title').text('New message to ' + recipient);
});

$('#exampleModalLong').on('hide.bs.modal', function() {
    alert('Modal closed!');
});

$('[data-toggle="popover"]').popover();

$('[data-toggle="tooltip"]').tooltip();

$('[data-toggle="tooltip"]').on('show.bs.tooltip', function (event) {
    alert('tooltips work!');
});