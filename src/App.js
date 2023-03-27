

import React from ' react';'
import CoreMotion from 'coremotion';
import CoreLocation frim 'corelocation';
class SensorManager: NSObject, CLLocationManagerDelegate {
    let motionManager = CMMotionManager()
        let locationManager = CLLocationManager()
            funcrion  startSensors() {
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