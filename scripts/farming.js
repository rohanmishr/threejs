var farmingUnitSlots = [null, null, null];

var basicSynthesizer = new Synthesizer("Basic Synthesizer", "A relatively simple synthesizer that can start making produce.", 1, BASIC);
var simpleBiotech = new Biotech("Simple Biotech", "Primitive biotechnology that will allow for the making of produce.", 1, BASIC);

var synthesizerS1 = new Synthesizer("Synthesizer S-1", "The S series provides more advanced synthesizers for production.", 5, ADVANCED);
var synthesizerS2 = new Synthesizer("Synthesizer S-2", "An upgraded synthesizer S-1.", 7, ADVANCED);
var synthesizerS3 = new Synthesizer("Synthesizer S-3", "An upgraded synthesizer S-2.", 10, ADVANCED);

var biotechB1 = new Biotech("Biotech B-1", "The B series provides more advanced biotechnology for production.", 5, ADVANCED);
var biotechB2 = new Biotech("Biotech B-2", "An upgraded biotech B-1.", 7, ADVANCED);
var biotechB3 = new Biotech("Biotech B-3", "An upgraded biotech B-2.", 10, ADVANCED);

var farmingArr = [basicSynthesizer, simpleBiotech];