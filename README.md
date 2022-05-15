# Computing 2 submission brief

This app is a forecast guide to help you choose your ideal destination. At first, you enter the city you live in, and it  will output the city's name as a confirmation, the weather description and the temperature in degrees Celsius. After this, you can also input a city you might want to travel to. The web-app will again output the temperature and the weather description there. If the tourist city is warmer than in your city, the  program will encourage you to go there and take a break. However, if it's colder, it will suggest you to find another city to travel to. Finally, it  will display at the bottom of the page the number of kilometers, to let you know how far is it from your home.


# Coding structure

The code is defined in 3 main parts:
- The first part just defined the variables globally, so we can modify them locally and still access them outisde of the functions. We also define the functions we are going to use outise our HTML functions, so we can easily test them and add some purity to our code.
- The second part is the home city function, in an on-click function. Once the button is clicked, it will take the input city and using the http://api.openweathermap.org/data/2.5/weather API, it will access the database and store in variables the coordinates of the city, its name, its weather description and temperature. From there, it will send the name, temperature and description to my HTML, which will display these informations on my web-app. It will also try to calculate the distance from our second city. If it is not defined, the value will be NaN, which will therefore not be returned. 
- The third part is my tourist city function, which inputs the same information as my home function. However, here the distance is sent to the server to be processed, and sent back to the user, on the client side.


# UX/ UI

My web-app is a sky background to set the user in the environment of the app: A web-app that gives the weather in different cities to help you find your ideal destination to have a break. It has a header with the title and a description, that explains how the web-app works. It is then divided in 2 main parts: the left side lets you input your city, the right hand side a city you want to visit. Below each input box, the city, weather description and temperature will appear. If the 2 cities are input, an alert will pop up telling you if it is a good idea or not to go there. It  will also give you at the bottom of the page the distance between the 2 distances.


# Data

My web-app is mainly based on the client side, as it mainly accesses a database and returns values it has taken from this database. However, I use an ajax file and a handler to store and process calculation, that will then be returned to the client-side.


# Testing/ Debugging

For the testing,  I first added some purity in my main.js, defining some functions outside my on-click functions, to test them more easily. I wanted to do property testing, to be sure my functions can be tested over a lot of examples using fast-check. However, I encountered a lot of errors that I have never heard of, and  couldn't fix. I even looked at how to do property testing using a properties file, that should have added clarity to my  test file. After asking for help and looking over the Internet, I decided  to try at first unit test functions. Same issue here, the functions kept on giving me Mocha: error, which meant I couldn't test my functions, and  know what I did wrong. 
You will find in my code some attempts at coding testing functions, either property or unit testing, that didn't work.


# Best practice

I particularly understanding how to manipulate and link different coding languages. I thought learning how to access and manipulate a database was really interesting and very useful for further computing. Finally, having a very open project with clear constraints on what we had to do made the project more fun to code and more straight-forward.