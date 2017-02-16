// Jesse Allison & Anthony T. Marasco
// PDM Total Demo 

const int analogPin = A0;//the analog input pin sensor is attached to
const int digitalPin = 7;
const int outPin = 10;
const int outPin2 = 9;

int buttonState = LOW;
int sensorVal;

int incomingByte = 1;      // a variable to read incoming serial data into
int incomingByte2 = 1;

void setup() {
  // put your setup code here, to run once:

  pinMode(analogPin, INPUT);
  pinMode(digitalPin, INPUT);
  pinMode(outPin, OUTPUT);

  Serial.begin(9600);

  digitalWrite(outPin, HIGH);
}

void loop() {
  // put your main code here, to run repeatedly:
  sensorVal = analogRead(analogPin);
  buttonState = digitalRead(digitalPin);

  sensorVal = map(sensorVal,0,1023,0,255);
  
  Serial.print(buttonState);
  Serial.print(",");
  Serial.println(sensorVal);



  if (Serial.available() > 0) {
    // read the oldest byte in the serial buffer:
    incomingByte = Serial.read();
    incomingByte2 = Serial.read();
    // if it's a 1, turn on the LED:
    if (incomingByte == '1') {
      digitalWrite(outPin, HIGH);
    }
    // if it's a 0 turn off the LED:
    if (incomingByte == '0') {
      digitalWrite(outPin, LOW);
    }

    if (incomingByte2 == '1'){
       digitalWrite(outPin2, HIGH);
    } else{
      digitalWrite(outPin2, LOW);
    }
    
  }

  
}
