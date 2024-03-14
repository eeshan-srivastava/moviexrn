A sample app in React Native around Movies.

Note : I have treated the four categories of movies as four different features for this project.

To Run the app:

Android: 

yarn cleanAndroid
yarn android

Ios: 

yarn cleanIos
cd ios
pod install
cd ..
yarn ios

I have introduced clean architecture for the project though it doesn't follow 100% of the arch, it is flexible and modular enough to scale to any level

Used Wrapper over Third Party components.

Added StateMchines
Should have added the token in a const file. (didn't had time to add env)
