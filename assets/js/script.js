
var wow = new WOW(
  {
    boxClass:     'wowload',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true        // act on asynchronously loaded content (default is true)
  }
);
wow.init();

$(document).ready(function() {
$('#form1').bootstrapValidator({

    fields: {
        nome: {
            validators: {
                notEmpty: {
                    message: 'Este campo não pode ser deixado em branco'
                }
            }
        },
        telefone: {
            validators: {
                notEmpty: {
                    message: 'Este campo não pode ser deixado em branco'
                }
            }
        },  mensagem: {
            validators: {
                notEmpty: {
                    message: 'Este campo não pode ser deixado em branco'
                }
            }
        },
        email: {
            validators: {
                notEmpty: {
                    message: 'Este campo não pode ser deixado em branco'
                },
                emailAddress: {
                        message: 'Email não valido'}
            }
        } /* <-- removed unneeded comma */
    } /* <-- added closing brace */

    /*turn of disable button*/
}).on('error.field.bv', function(e, data) {
          if (data.bv.getSubmitButton()) {
              data.bv.disableSubmitButtons(false);
          }
      })
      .on('success.field.bv', function(e, data) {
          if (data.bv.getSubmitButton()) {
              data.bv.disableSubmitButtons(false);
          }
      });

});

$(document).ready(function() {

$('#form').bootstrapValidator({

    fields: {
        nome: {
            validators: {
                notEmpty: {
                    message: 'Este campo não pode ser deixado em branco'
                }
            }
        },
        numero_quartos: {
            validators: {
                notEmpty: {
                    message: 'Este campo não pode ser deixado em branco'
                }
            }
        },
        telefone: {
            validators: {
                notEmpty: {
                    message: 'Este campo não pode ser deixado em branco'
                }
            }
        },
        nacionalidade: {
            validators: {
                notEmpty: {
                    message: 'Este campo não pode ser deixado em branco'
                }
            }
        },numero_doc: {
            validators: {
                notEmpty: {
                    message: 'Este campo não pode ser deixado em branco'
                }
            }
        },endereço: {
            validators: {
                notEmpty: {
                    message: 'Este campo não pode ser deixado em branco'
                }
            }
        },Checkin: {
            validators: {
                notEmpty: {
                    message: 'Este campo não pode ser deixado em branco'
                }
            }
        },Checkout: {
            validators: {
                notEmpty: {
                    message: 'Este campo não pode ser deixado em branco'
                }
            }
        },Tipo_de_quarto: {
            validators: {
                notEmpty: {
                    message: 'Este campo não pode ser deixado em branco'
                }
            }
        },numero_de_adultos: {
            validators: {
                notEmpty: {
                    message: 'Este campo não pode ser deixado em branco'
                }
            }
        },
        email: {
            validators: {
                notEmpty: {
                    message: 'Este campo não pode ser deixado em branco'
                },
                emailAddress: {
                        message: 'Email não valido'}
            }
        } /* <-- removed unneeded comma */
    } /* <-- added closing brace */

    /*turn of disable button*/
}).on('error.field.bv', function(e, data) {
          if (data.bv.getSubmitButton()) {
              data.bv.disableSubmitButtons(false);
          }
      })
      .on('success.field.bv', function(e, data) {
          if (data.bv.getSubmitButton()) {
              data.bv.disableSubmitButtons(false);
          }
      });

});

  $('#datePicker')
        .datepicker({
            format: 'dd/mm/yyyy'
        })
        .on('changeDate', function(e) {
            // Revalidate the date field
            $('#Form').bootstrapValidator('revalidateField', 'Check-in');
        });

$('#datePicker1')
        .datepicker({
            format: 'dd/mm/yyyy'
        })
        .on('changeDate', function(e) {
            // Revalidate the date field
            $('#Form').bootstrapValidator('revalidateField', 'Check-out');
        });

  $('#datePicker2')
        .datepicker({
            format: 'dd/mm/yyyy'
        })
        .on('changeDate', function(e) {
            // Revalidate the date field
            $('#Form3').bootstrapValidator('revalidateField', 'Check-in');
        });

  $('#datePicker3')
        .datepicker({
            format: 'dd/mm/yyyy'
        })
        .on('changeDate', function(e) {
            // Revalidate the date field
            $('#Form3').bootstrapValidator('revalidateField', 'Check-in');
        });

  
  
$(document).ready(function() {

$('#for').bootstrapValidator({

    fields: {
        nome: {
            validators: {
                notEmpty: {
                    message: 'Este campo não pode ser deixado em branco'
                }
            }
        },
        numero_quartos: {
            validators: {
                notEmpty: {
                    message: 'Este campo não pode ser deixado em branco'
                }
            }
        },
        telefone: {
            validators: {
                notEmpty: {
                    message: 'Este campo não pode ser deixado em branco'
                }
            }
        },
        nacionalidade: {
            validators: {
                notEmpty: {
                    message: 'Este campo não pode ser deixado em branco'
                }
            }
        },conhecimento: {
            validators: {
                notEmpty: {
                    message: 'Selecione uma das opções'
                }
            }
        },motivo: {
            validators: {
                notEmpty: {
                    message: 'Selecione uma das opções'
                }
            }
        },
        email: {
            validators: {
                notEmpty: {
                    message: 'Este campo não pode ser deixado em branco'
                },
                emailAddress: {
                        message: 'Email não valido'}
            }
        } /* <-- removed unneeded comma */
    } /* <-- added closing brace */

    /*turn of disable button*/
}).on('error.field.bv', function(e, data) {
          if (data.bv.getSubmitButton()) {
              data.bv.disableSubmitButtons(false);
          }
      })
      .on('success.field.bv', function(e, data) {
          if (data.bv.getSubmitButton()) {
              data.bv.disableSubmitButtons(false);
          }
      });

});

