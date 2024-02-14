const convertbutton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencyMoeda = document.querySelector(".currency-moeda")

function convertValues() {
  const inputCurrencyValues = document.querySelector(".input-currency").value
  const currencyValueToConvert = document.querySelector(".currency-valuer-to-convert") // Valor em Real
  const currencyValueConverted = document.querySelector(".currency-valuer") // Valor moedas

  const dolarToday = 4.97
  const euroToday = 5.33
  const euroDolar = 1.07

  if (currencyMoeda.value == "real" && currencySelect.value == "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(inputCurrencyValues / dolarToday)
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(inputCurrencyValues)
  }

  if (currencyMoeda.value == "real" && currencySelect.value == "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(inputCurrencyValues / euroToday)
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(inputCurrencyValues)
  }

  if (currencyMoeda.value == "real" && currencySelect.value == "real") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(inputCurrencyValues)
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(inputCurrencyValues)
  }

  if (currencyMoeda.value == "dolar" && currencySelect.value == "real") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(inputCurrencyValues * dolarToday)
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(inputCurrencyValues)
  }

  if (currencyMoeda.value == "dolar" && currencySelect.value == "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(inputCurrencyValues / euroDolar)
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(inputCurrencyValues)
  }

  if (currencyMoeda.value == "dolar" && currencySelect.value == "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(inputCurrencyValues)
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(inputCurrencyValues)
  }

  if (currencyMoeda.value == "euro" && currencySelect.value == "real") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(inputCurrencyValues * euroToday)
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(inputCurrencyValues)
  }

  if (currencyMoeda.value == "euro" && currencySelect.value == "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(inputCurrencyValues * euroDolar)
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(inputCurrencyValues)
  }

  if (currencyMoeda.value == "euro" && currencySelect.value == "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(inputCurrencyValues)
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(inputCurrencyValues)
  }

}

function changeCurrencyMoeda() {
  const currencyNameMoeda = document.getElementById("currency-name-moeda")
  const currencyimgMoeda = document.querySelector(".currency-img-moeda")

  if (currencyMoeda.value == "dolar") {
    currencyNameMoeda.innerHTML = "Dólar Americano"
    currencyimgMoeda.src = "./assets/dolar.png"
  }

  if (currencyMoeda.value == "euro") {
    currencyNameMoeda.innerHTML = "Euro"
    currencyimgMoeda.src = "./assets/euro.png"
  }

  if (currencyMoeda.value == "real") {
    currencyNameMoeda.innerHTML = "Real"
    currencyimgMoeda.src = "./assets/real.png"
  }

  convertValues()
}

function changeCurrency() {
  const currencyName = document.getElementById("currency-name")
  const currencyimg = document.querySelector(".currency-img")

  if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar Americano"
    currencyimg.src = "./assets/dolar.png"
  }

  if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro"
    currencyimg.src = "./assets/euro.png"
  }

  if (currencySelect.value == "real") {
    currencyName.innerHTML = "Real"
    currencyimg.src = "./assets/real.png"
  }

  convertValues()
}

convertbutton.addEventListener("click", convertValues)
currencySelect.addEventListener("change", changeCurrency)
currencyMoeda.addEventListener("change", changeCurrencyMoeda)