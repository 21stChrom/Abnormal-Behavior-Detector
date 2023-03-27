modify this code to detect seizures
code for an iOS app that can detect and monitor all the 13 sensors on a device:
```swift
import CoreMotion
import CoreLocation
class SensorManager: NSObject, CLLocationManagerDelegate {
    let motionManager = CMMotionManager()
        let locationManager = CLLocationManager()
            func startSensors() {
                    startAccelerometer()
                            startGyroscope()
                                    startMagnetometer()
                                            startDeviceMotion()
                                                    startPedometer()
                                                            startAltimeter()
                                                                    startBarometer()
                                                                            startProximitySensor()
                                                                                    startLightSensor()
                                                                                            startMicrophone()
                                                                                                    startCamera()
                                                                                                            startGPS()
                                                                                                                    startCompass()
                                                                                                                        }
                                                                                                                            
                                                                                                                                func startAccelerometer() {
                                                                                                                                        if motionManager.isAccelerometerAvailable {
                                                                                                                                                    motionManager.accelerometerUpdateInterval = 1 / 60
                                                                                                                                                                motionManager.startAccelerometerUpdates(to: .main) { (data, error) in
                                                                                                                                                                                guard let accelerometerData = data else