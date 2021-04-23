import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/styles.css'
import Currency from './currency-service.js'

function getExchange(response) {
  if (response) {
    
  }
}

$(document).ready(function() {
  $('#dollars').submit(function(event) {
    event.preventDefault();
    let currency = $('#exchange').val();
    Currency.getCurrency(currency)
      .then(function(response) {
        getExchange(response);
    })
  })
})
