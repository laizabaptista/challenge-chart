### Challenge Chart Plot

This challenge was proposed by Intelie. The challenge is to develop an application using ReactJS and an Text Editor to plot charts. 
For me, was a big challenge, I'd never work with React, and I was studying JavaScript, so, was basically use all things I already studied about and lot of research.
For the text editor, I tryed to use Code Mirror, but I didn't discover how to use the entry data, so I used a simple html text editor.
This will a goal to conclude in the future, I will study more to it.
For the chart,I used React-apexcharts (https://www.npmjs.com/package/react-apexcharts)

You can test this application here: https://challenge-chart.vercel.app/

### How use this application locally?

1. Install dependencies

> yarn install

2. Run app

> yarn start

### Strategy

The application get the data entered by user into the text box, removed all the spaces between the strings and transport the data to a JSON string and stored in a list.

To solve the problem consisted of reading each position of the list the strategy used was:
Searching the index of the last _start event_ present in this list, and storing that index so that only subsequent data to that start event is considered. 
Therefore, after you set the list index that contains the last _start event_ of the set, the _select_ and _group_ information is captured.

While a _span event_ is not defined, data type events are not captured to be computed. When a _span event_ is defined, start and end timestamps are collected to set the global timestamps interval. Then _data-type events_ are captured following the criteria that their timestamps must be within the global timestamp range. The _timestamp_ of the _data event_ must be contained in the global timestamp interval, otherwise this event will not be counted.

If there is a new _span event_, a new global timestamp will be defined and a check will be made on the data of the _data type_ events that have been registered so far, removing events where the timestamp is not in the global range of timestamps.

### An example of entry is:

https://github.com/laizabaptista/intelie-challenges/blob/main/public/example.txt


