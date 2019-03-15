import { Component, OnInit } from '@angular/core';
import { TouchSequence } from 'selenium-webdriver';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  durChords: String[] = ['C', 'G', 'D', 'A', 'E', 'H', 'F#', 'Db', 'Ab', 'Eb', 'B', 'F'];
  mollChords: String[] = ['Am', 'Em', 'Bm', 'F#m', 'C#m', 'G#m', 'D#m', 'Bbm', 'Fm', 'Cm', 'Gm', 'Dm'];
  resultChords: String[] = [];
  selectedChord: String;
  chordAmount: number = 4;
  chordIndex: number = 0;


  constructor() { }

  ngOnInit() {
    console.log('durCircle length: ' + this.durChords.length);
    console.log('mollCircle length: ' + this.mollChords.length);

    this.generateChords();
  }

  setSelectedChordIndex(chordIndex: number) {
    this.chordIndex = chordIndex;
  }

  generateChords() {
    this.generatePopChords(this.chordIndex, this.chordAmount);
  }



  getChordOfDurCircle(index: number): String {

    return this.getElementOfCircularArray(index, this.durChords);
  }

  getChordOfMollCircle(index: number): String {

    return this.getElementOfCircularArray(index, this.mollChords);
  }

  getElementOfCircularArray(index: number, array: String[]): String {

    while (index < 0) {
      index += array.length;
    }

    while (index >= array.length) {
      index -= array.length;
    }

    return array[index];
  }

  generateChordsWithRandomTone() {
    const rndChord: number = Math.floor(Math.random() * 11);
    const rndAmount: number = Math.floor(Math.random() * (9 - 4 + 1) + 4);

    this.chordIndex = rndChord;
    this.chordAmount = rndAmount;

    this.generatePopChords(rndChord, rndAmount);
  }



  generatePopChords(chordIndex: number, numberOfChords: number): String[] {
    this.resultChords = [];

    console.log('generatePopChords invoked with params : chordIndex = ' + chordIndex + ', numberOfChords = ' + numberOfChords);

    switch (+numberOfChords) {
      case 4: {
        console.log('case 4');
        return this.generate4PopChords(chordIndex);
      }
      case 5: {
        return this.generate5PopChords(chordIndex);
      }
      case 6: {
        return this.generate6PopChords(chordIndex);
      }
      case 7: {
        return this.generate7PopChords(chordIndex);
      }
      case 8: {
        return this.generate8PopChords(chordIndex);
      }
      case 9: {
        return this.generate9PopChords(chordIndex);
      }
    }
  }

  generate4PopChords(chordIndex: number): String[] {

    this.resultChords[0] = this.getChordOfDurCircle(chordIndex);
    this.resultChords[1] = this.getChordOfDurCircle(+chordIndex + 1);
    this.resultChords[2] = this.getChordOfMollCircle(chordIndex);
    this.resultChords[3] = this.getChordOfDurCircle(+chordIndex - 1);

    console.log(this.resultChords);

    return this.resultChords;

  }

  generate5PopChords(chordIndex: number): String[] {

    this.resultChords[0] = this.getChordOfDurCircle(chordIndex);
    this.resultChords[1] = this.getChordOfDurCircle(+chordIndex + 1);
    this.resultChords[2] = this.getChordOfMollCircle(chordIndex);
    this.resultChords[3] = this.getChordOfDurCircle(+chordIndex - 1);
    this.resultChords[4] = this.getChordOfDurCircle(+chordIndex + 1);


    console.log(this.resultChords);

    return this.resultChords;

  }
  generate6PopChords(chordIndex: number): String[] {

    this.resultChords[0] = this.getChordOfDurCircle(chordIndex);
    this.resultChords[1] = this.getChordOfDurCircle(+chordIndex + 1);
    this.resultChords[2] = this.getChordOfMollCircle(chordIndex);
    this.resultChords[3] = this.getChordOfMollCircle(+chordIndex + 1);
    this.resultChords[4] = this.getChordOfDurCircle(+chordIndex - 1);
    this.resultChords[5] = this.getChordOfDurCircle(+chordIndex + 1);


    console.log(this.resultChords);

    return this.resultChords;

  }

  generate7PopChords(chordIndex: number): String[] {

    this.resultChords[0] = this.getChordOfDurCircle(chordIndex);
    this.resultChords[1] = this.getChordOfDurCircle(+chordIndex + 1);
    this.resultChords[2] = this.getChordOfMollCircle(chordIndex);
    this.resultChords[3] = this.getChordOfMollCircle(+chordIndex + 1);
    this.resultChords[4] = this.getChordOfDurCircle(+chordIndex - 1);
    this.resultChords[5] = this.getChordOfDurCircle(chordIndex);
    this.resultChords[6] = this.getChordOfDurCircle(+chordIndex + 1);


    console.log(this.resultChords);

    return this.resultChords;

  }

  generate8PopChords(chordIndex: number): String[] {

    this.resultChords[0] = this.getChordOfDurCircle(chordIndex);
    this.resultChords[1] = this.getChordOfDurCircle(+chordIndex + 1);
    this.resultChords[2] = this.getChordOfMollCircle(chordIndex);
    this.resultChords[3] = this.getChordOfMollCircle(+chordIndex + 1);
    this.resultChords[4] = this.getChordOfDurCircle(+chordIndex - 1);
    this.resultChords[5] = this.getChordOfDurCircle(chordIndex);
    this.resultChords[6] = this.getChordOfMollCircle(+chordIndex - 1);
    this.resultChords[7] = this.getChordOfDurCircle(+chordIndex + 1);


    console.log(this.resultChords);

    return this.resultChords;

  }
  generate9PopChords(chordIndex: number): String[] {

    this.resultChords[0] = this.getChordOfDurCircle(chordIndex);
    this.resultChords[1] = this.getChordOfDurCircle(+chordIndex + 1);
    this.resultChords[2] = this.getChordOfMollCircle(chordIndex);
    this.resultChords[3] = this.getChordOfMollCircle(+chordIndex + 1);
    this.resultChords[4] = this.getChordOfDurCircle(+chordIndex - 1);
    this.resultChords[5] = this.getChordOfDurCircle(chordIndex);
    this.resultChords[6] = this.getChordOfMollCircle(+chordIndex - 1);
    this.resultChords[7] = this.getChordOfDurCircle(+chordIndex - 1);
    this.resultChords[8] = this.getChordOfDurCircle(+chordIndex + 1);



    console.log(this.resultChords);

    return this.resultChords;

  }

}
