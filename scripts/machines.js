var engineI = new Machine("Engine I", "A basic engine.", 1, BASIC);
var engineII = new Machine("Engine II", "An improved engine for machiners.", 5, BASIC);

var armsManufacturerI = new Machine("Arms Manufacturer I", "The most simple arms maker.", 10, ADVANCED);
var armsManufacturerII = new Machine("Arms Manufacturer II", "An advanced arms constructor for the seasoned machiner.", 25, ADVANCED);

var industrialMachineI = new Machine("Industrial Machine I", "A machine ready for industrial use and more advanced machining.", 10, ADVANCED);
var industrialMachineII = new Machine("Industrial Machine II", "A high level industrial machine that runs on raw power.", 25, ADVANCED);

//Fuel tanks
var basicFuelTank = new FuelTank("Basic Fuel Tank", "A simple fuel tank to run your machine.", 5, BASIC);

//Extensions
var CPU_A1 = new Extension("CPU A1", "A basic CPU to improve the speed of your machine.", 1, BASIC);

var machineArr = [engineI, engineII, armsManufacturerI, armsManufacturerII, industrialMachineI, industrialMachineII, basicFuelTank, CPU_A1];