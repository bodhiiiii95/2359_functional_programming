/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends React.Component{
  constructor(props){
    super(props)

    this.numbers = [1, 4, 5, 1, 2, 10, 12, 15, 11, 13, 11, 5];
    this.state = {
      showSum :0,
      showUniqueOddSum:0,
    };
  }

  sumOddNumber = () => {
    let sum = 0;
    this.numbers.map((number) => { // mapping numbers array
      if(number % 2 == 0){ //is number modulus 2 is zero?
        //if yes, do nothing
      }  
      else{
        sum = sum + number; // if no, add number to sum value
      }
    })
    console.log("sum of odd number = " + sum); //print sum in console
    return sum;
  }

  sumUniqueOddNumber = () => {
    let uniqueSum = 0;
    let oddNumberContainer = [];
    let oddNumberBefore = 0;
    let sameOddFlag = 0;

    this.numbers.map((number) => { // mapping numbers array
      if(number % 2 === 0){ //is number modulus 2 is zero?
        //if yes, do nothing
      }
      else{
        if(number == oddNumberBefore){ //is number same as before number?
          // do nothing
        }
        else{
          if(oddNumberContainer.length === 0){ // is oddNumberContiner empty?
            oddNumberContainer.push(number);// add number to container
            uniqueSum = uniqueSum + number; // sum the number
          }
          else{
            // do nothing
          }
          for(let i=0; i<oddNumberContainer.length; i++){
            if(number === parseInt(oddNumberContainer[i])){ // is number same as oddNumberContainer member?
              sameOddFlag++; //add flag
            }
            else{
              //do nothing
            }
          }
          if(sameOddFlag > 0){
            sameOddFlag = 0;
            //do nothing
          }
          else{
            oddNumberBefore = number; // assign numebr to oddNumberBefore
            uniqueSum = uniqueSum + number; // sum the number
            oddNumberContainer.push(number);// add number to container
          }
        }
      }
    })
    console.log("sum of unique odd number = " + uniqueSum); //print uniqueSum in console
    return uniqueSum;
  }

  componentDidMount(){
    this.setState({showSum:this.sumOddNumber(), showUniqueOddSum:this.sumUniqueOddNumber()});
  }

  render(){
    return(
      <View>
        <Text>this is answer for question number 1</Text>
        <Text>sum of odd number = {this.state.showSum}</Text>
        <Text>sum of unique odd number = {this.state.showUniqueOddSum}</Text>
      </View>
    )
  }

}

export default App;
