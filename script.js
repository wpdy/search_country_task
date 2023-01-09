let enter_country = document.getElementById('enter_country')
let search_country = document.getElementById('search_country')


search_country.addEventListener('click', ()=> {
    
    const getArticles = async ()=> {
        try {
            const api = await fetch(`https://restcountries.com/v3.1/name/${enter_country.value}`)
            const country = await api.json()

            enter_country.style.display = "none"
            search_country.style.display = "none"

            let about_country = document.createElement('div')
            about_country.id = 'about_country'
            root.appendChild(about_country)
            
            let country_name = document.createElement('h1')
            country_name.innerHTML = country[0].name.common
            about_country.appendChild(country_name)

            let country_img = document.createElement("img")
            country_img.src = country[0].flags.svg
            about_country.appendChild(country_img)

            let country_region = document.createElement("h2");
            country_region.innerText = `Region: ${country[0].region}`
            about_country.appendChild(country_region)

            let country_cipital = document.createElement("h2");
            country_cipital.innerText = `Capital city: ${country[0].capital[0]}`
            about_country.appendChild(country_cipital)

            let country_population = document.createElement("h2");
            country_population.innerText = `Population: ${country[0].population}`
            about_country.appendChild(country_population)

            let country_area = document.createElement("h2");
            country_area.innerText = `Area Size: ${country[0].area}`
            about_country.appendChild(country_area)

            let country_timezone = document.createElement("h2");
            country_timezone.innerText = `TimeZone: ${country[0].timezones[0]}`
            about_country.appendChild(country_timezone)

            let country_borders = document.createElement('h2')
            country_borders.innerText = `Borders: `
            about_country.appendChild(country_borders)

            let borders_list = document.createElement('ul')
            about_country.appendChild(borders_list)

            country[0].borders.forEach((border) => {
                let border_list = document.createElement('li')
                border_list.innerText = border
                borders_list.appendChild(border_list)
            });

            let country_languages = document.createElement('h2')
            country_languages.innerText = `Languages: `
            about_country.appendChild(country_languages)

            let languages_list = document.createElement('ul')
            about_country.appendChild(languages_list)

            Object.entries(country[0].languages).forEach((language) => {
                let language_list = document.createElement('li')
                language_list.innerText = language.join(': ')
                languages_list.appendChild(language_list)
            });

            let country_currencies = document.createElement('h2')
            country_currencies.innerText = `Currencies: `
            about_country.appendChild(country_currencies)

            let currencies_list = document.createElement('ul')
            about_country.appendChild(currencies_list)

            Object.entries(country[0].currencies).forEach((currencie) => {
                let currencie_list = document.createElement('li')
                currencie_list.innerText = `${currencie[0]}: ${currencie[1].name}`
                currencies_list.appendChild(currencie_list)
            });

            let close_search = document.createElement('button')
            close_search.id = 'close_search'
            close_search.innerHTML = 'Close'
            about_country.appendChild(close_search)

            close_search.addEventListener('click', ()=> {
                about_country.remove()
                enter_country.style.display = "block"
                search_country.style.display = "block"
            })

            enter_country.value = ''
        }

        catch(err) {
            console.log(err)
        }
    }
    getArticles()
})
