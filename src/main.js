import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/styles.css'
import Currency from './currency-service.js'

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

function getExchange(response) {
  if (response) {
    $('#mexico').click(function() {
      let mexicoConversion = $("#exchange").val() * response.conversion_rates.MXN;
      $('#results').html(`<p>${mexicoConversion}</p>`)
    })
    $('#australia').click(function() {
      let australiaConversion = $("#exchange").val() * response.conversion_rates.AUD;
      $('#results').html(`<p>${australiaConversion}</p>`)
    })
    $('#euro').click(function() {
      let euroConversion = $('#exchange').val() * response.conversion_rates.EUR;
      $('#results').html(`<p>${euroConversion}</p>`)
    })
    $('#hong-kong').click(function() {
      let hongKongConversion = $('#exchange').val() * response.conversion_rates.HKD;
      $('#results').html(`<p>${hongKongConversion}</p>`)
    })
    $('#croatia').click(function() {
      let croatiaConversion = $('#exchange').val() * response.conversion_rates.HRK;
      $('#results').html(`<p>${croatiaConversion}</p>`)
    })
    $('#north-korea').click(function() {
      let northKoreaConversion = $('#exchange').val() * response.conversion_rates.KPW;
      $('#results').html(`<p>${northKoreaConversion}</p>`)
    })
  }
}




