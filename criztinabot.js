/*
  elizabot.js v.1.1 - ELIZA JS library (N.Landsteiner 2005)
  Eliza is a mock Rogerian psychotherapist.
  Original program by Joseph Weizenbaum in MAD-SLIP for "Project MAC" at MIT.
  cf: Weizenbaum, Joseph "ELIZA - A Computer Program For the Study of Natural Language
      Communication Between Man and Machine"
      in: Communications of the ACM; Volume 9 , Issue 1 (January 1966): p 36-45.
  JavaScript implementation by Norbert Landsteiner 2005; <http://www.masserk.at>

  synopsis:

         new ElizaBot( <random-choice-disable-flag> )
         ElizaBot.prototype.transform( <inputstring> )
         ElizaBot.prototype.getInitial()
         ElizaBot.prototype.getFinal()
         ElizaBot.prototype.reset()

  usage: var eliza = new ElizaBot();
         var initial = eliza.getInitial();
         var reply = eliza.transform(inputstring);
         if (eliza.quit) {
             // last user input was a quit phrase
         }

         // method `transform()' returns a final phrase in case of a quit phrase
         // but you can also get a final phrase with:
         var final = eliza.getFinal();

         // other methods: reset memory and internal state
         eliza.reset();

         // to set the internal memory size override property `memSize':
         eliza.memSize = 100; // (default: 20)

         // to reproduce the example conversation given by J. Weizenbaum
         // initialize with the optional random-choice-disable flag
         var originalEliza = new ElizaBot(true);

  `ElizaBot' is also a general chatbot engine that can be supplied with any rule set.
  (for required data structures cf. "elizadata.js" and/or see the documentation.)
  data is parsed and transformed for internal use at the creation time of the
  first instance of the `ElizaBot' constructor.

  vers 1.1: lambda functions in RegExps are currently a problem with too many browsers.
            changed code to work around.
*/


function criztinaBot(noRandomFlag) {
	this.noRandom= (noRandomFlag)? true:false;
	this.capitalizeFirstLetter=true;
	this.debug=false;
	this.memSize=20;
	this.version="1.1 (original)";
	if (!this._dataParsed) this._init();
	this.reset();
}

criztinaBot.prototype.reset = function() {
	this.quit=false;
	this.mem=[];
	this.lastchoice=[];
	for (var k=0; k<criztinaKeywords.length; k++) {
		this.lastchoice[k]=[];
		var rules=criztinaKeywords[k][2];
		for (var i=0; i<rules.length; i++) this.lastchoice[k][i]=-1;
	}
}

criztinaBot.prototype._dataParsed = false;

criztinaBot.prototype._init = function() {
	// install ref to global object
	var global=criztinaBot.prototype.global=self;
	// parse data and convert it from canonical form to internal use
	// prodoce synonym list
	var synPatterns={};
	if ((global.criztinaSynons) && (typeof criztinaSynons == 'object')) {
		for (var i in criztinaSynons) synPatterns[i]='('+i+'|'+criztinaSynons[i].join('|')+')';
	}
	// check for keywords or install empty structure to prevent any errors
	if ((!global.criztinaKeywords) || (typeof criztinaKeywords.length == '…')) {
		criztinaKeywords=[['###',0,[['###',[]]]]];
	}
	// 1st convert rules to regexps
	// expand synonyms and insert asterisk expressions for backtracking
	var sre=/@(\S+)/;
	var are=/(\S)\s*\*\s*(\S)/;
	var are1=/^\s*\*\s*(\S)/;
	var are2=/(\S)\s*\*\s*$/;
	var are3=/^\s*\*\s*$/;
	var wsre=/\s+/g;
	for (var k=0; k<criztinaKeywords.length; k++) {
		var rules=criztinaKeywords[k][2];
		criztinaKeywords[k][3]=k; // save original index for sorting
		for (var i=0; i<rules.length; i++) {
			var r=rules[i];
			// check mem flag and store it as decomp's element 2
			if (r[0].charAt(0)=='$') {
				var ofs=1;
				while (r[0].charAt[ofs]==' ') ofs++;
				r[0]=r[0].substring(ofs);
				r[2]=true;
			}
			else {
				r[2]=false;
			}
			// expand synonyms (v.1.1: work around lambda function)
			var m=sre.exec(r[0]);
			while (m) {
				var sp=(synPatterns[m[1]])? synPatterns[m[1]]:m[1];
				r[0]=r[0].substring(0,m.index)+sp+r[0].substring(m.index+m[0].length);
				m=sre.exec(r[0]);
			}
			// expand asterisk expressions (v.1.1: work around lambda function)
			if (are3.test(r[0])) {
				r[0]='\\s*(.*)\\s*';
			}
			else {
				m=are.exec(r[0]);
				if (m) {
					var lp='';
					var rp=r[0];
					while (m) {
						lp+=rp.substring(0,m.index+1);
						if (m[1]!=')') lp+='\\b';
						lp+='\\s*(.*)\\s*';
						if ((m[2]!='(') && (m[2]!='\\')) lp+='\\b';
						lp+=m[2];
						rp=rp.substring(m.index+m[0].length);
						m=are.exec(rp);
					}
					r[0]=lp+rp;
				}
				m=are1.exec(r[0]);
				if (m) {
					var lp='\\s*(.*)\\s*';
					if ((m[1]!=')') && (m[1]!='\\')) lp+='\\b';
					r[0]=lp+r[0].substring(m.index-1+m[0].length);
				}
				m=are2.exec(r[0]);
				if (m) {
					var lp=r[0].substring(0,m.index+1);
					if (m[1]!='(') lp+='\\b';
					r[0]=lp+'\\s*(.*)\\s*';
				}
			}
			// expand white space
			r[0]=r[0].replace(wsre, '\\s+');
			wsre.lastIndex=0;
		}
	}
	// now sort keywords by rank (highest first)
	criztinaKeywords.sort(this._sortKeywords);
	// and compose regexps and refs for pres and posts
	criztinaBot.prototype.pres={};
	criztinaBot.prototype.posts={};
	if ((global.criztinaPres) && (criztinaPres.length)) {
		var a=new Array();
		for (var i=0; i<criztinaPres.length; i+=2) {
			a.push(criztinaPres[i]);
			criztinaBot.prototype.pres[criztinaPres[i]]=criztinaPres[i+1];
		}
		criztinaBot.prototype.preExp = new RegExp('\\b('+a.join('|')+')\\b');
	}
	else {
		// default (should not match)
		criztinaBot.prototype.preExp = /####/;
		criztinaBot.prototype.pres['####']='####';
	}
	if ((global.criztinaPosts) && (criztinaPosts.length)) {
		var a=new Array();
		for (var i=0; i<criztinaPosts.length; i+=2) {
			a.push(criztinaPosts[i]);
			criztinaBot.prototype.posts[criztinaPosts[i]]=criztinaPosts[i+1];
		}
		criztinaBot.prototype.postExp = new RegExp('\\b('+a.join('|')+')\\b');
	}
	else {
		// default (should not match)
		criztinaBot.prototype.postExp = /####/;
		criztinaBot.prototype.posts['####']='####';
	}
	// check for criztinaQuits and install default if missing
	if ((!global.criztinaQuits) || (typeof criztinaQuits.length == 'eeehm...heh, che vergogna...non so come risponderti')) {
		criztinaQuits=[];
	}
	// done
	criztinaBot.prototype._dataParsed=true;
}

criztinaBot.prototype._sortKeywords = function(a,b) {
	// sort by rank
	if (a[1]>b[1]) return -1
	else if (a[1]<b[1]) return 1
	// or original index
	else if (a[3]>b[3]) return 1
	else if (a[3]<b[3]) return -1
	else return 0;
}

criztinaBot.prototype.transform = function(text) {
	var rpl='';
	this.quit=false;
	// unify text string
	text=text.toLowerCase();
	text=text.replace(/@#\$%\^&\*\(\)_\+=~`\{\[\}\]\|:;<>\/\\\t/g, ' ');
	text=text.replace(/\s+-+\s+/g, '.');
	text=text.replace(/\s*[,\.\?!;]+\s*/g, '.');
	text=text.replace(/\s*\bbut\b\s*/g, '.');
	text=text.replace(/\s{2,}/g, ' ');
	// split text in part sentences and loop through them
	var parts=text.split('.');
	for (var i=0; i<parts.length; i++) {
		var part=parts[i];
		if (part!='') {
			// check for quit expression
			for (var q=0; q<criztinaQuits.length; q++) {
				if (criztinaQuits[q]==part) {
					this.quit=true;
					return this.getFinal();
				}
			}
			// preprocess (v.1.1: work around lambda function)
			var m=this.preExp.exec(part);
			if (m) {
				var lp='';
				var rp=part;
				while (m) {
					lp+=rp.substring(0,m.index)+this.pres[m[1]];
					rp=rp.substring(m.index+m[0].length);
					m=this.preExp.exec(rp);
				}
				part=lp+rp;
			}
			this.sentence=part;
			// loop trough keywords
			for (var k=0; k<criztinaKeywords.length; k++) {
				if (part.search(new RegExp('\\b'+criztinaKeywords[k][0]+'\\b', 'i'))>=0) {
					rpl = this._execRule(k);
				}
				if (rpl!='') return rpl;
			}
		}
	}
	// nothing matched try mem
	rpl=this._memGet();
	// if nothing in mem, so try xnone
	if (rpl=='') {
		this.sentence=' ';
		var k=this._getRuleIndexByKey('xnone');
		if (k>=0) rpl=this._execRule(k);
	}
	// return reply or default string
	return (rpl!='')? rpl : 'Non so che dire...';
}

criztinaBot.prototype._execRule = function(k) {
	var rule=criztinaKeywords[k];
	var decomps=rule[2];
	var paramre=/\(([0-9]+)\)/;
	for (var i=0; i<decomps.length; i++) {
		var m=this.sentence.match(decomps[i][0]);
		if (m!=null) {
			var reasmbs=decomps[i][1];
			var memflag=decomps[i][2];
			var ri= (this.noRandom)? 0 : Math.floor(Math.random()*reasmbs.length);
			if (((this.noRandom) && (this.lastchoice[k][i]>ri)) || (this.lastchoice[k][i]==ri)) {
				ri= ++this.lastchoice[k][i];
				if (ri>=reasmbs.length) {
					ri=0;
					this.lastchoice[k][i]=-1;
				}
			}
			else {
				this.lastchoice[k][i]=ri;
			}
			var rpl=reasmbs[ri];
			if (this.debug) alert('match:\nkey: '+criztinaKeywords[k][0]+
				'\nrank: '+criztinaKeywords[k][1]+
				'\ndecomp: '+decomps[i][0]+
				'\nreasmb: '+rpl+
				'\nmemflag: '+memflag);
			if (rpl.search('^goto ', 'i')==0) {
				ki=this._getRuleIndexByKey(rpl.substring(5));
				if (ki>=0) return this._execRule(ki);
			}
			// substitute positional params (v.1.1: work around lambda function)
			var m1=paramre.exec(rpl);
			if (m1) {
				var lp='';
				var rp=rpl;
				while (m1) {
					var param = m[parseInt(m1[1])];
					// postprocess param
					var m2=this.postExp.exec(param);
					if (m2) {
						var lp2='';
						var rp2=param;
						while (m2) {
							lp2+=rp2.substring(0,m2.index)+this.posts[m2[1]];
							rp2=rp2.substring(m2.index+m2[0].length);
							m2=this.postExp.exec(rp2);
						}
						param=lp2+rp2;
					}
					lp+=rp.substring(0,m1.index)+param;
					rp=rp.substring(m1.index+m1[0].length);
					m1=paramre.exec(rp);
				}
				rpl=lp+rp;
			}
			rpl=this._postTransform(rpl);
			if (memflag) this._memSave(rpl)
			else return rpl;
		}
	}
	return '';
}

criztinaBot.prototype._postTransform = function(s) {
	// final cleanings
	s=s.replace(/\s{2,}/g, ' ');
	s=s.replace(/\s+\./g, '.');
	if ((this.global.criztinaPostTransforms) && (criztinaPostTransforms.length)) {
		for (var i=0; i<criztinaPostTransforms.length; i+=2) {
			s=s.replace(criztinaPostTransforms[i], criztinaPostTransforms[i+1]);
			criztinaPostTransforms[i].lastIndex=0;
		}
	}
	// capitalize first char (v.1.1: work around lambda function)
	if (this.capitalizeFirstLetter) {
		var re=/^([a-z])/;
		var m=re.exec(s);
		if (m) s=m[0].toUpperCase()+s.substring(1);
	}
	return s;
}

criztinaBot.prototype._getRuleIndexByKey = function(key) {
	for (var k=0; k<criztinaKeywords.length; k++) {
		if (criztinaKeywords[k][0]==key) return k;
	}
	return -1;
}

criztinaBot.prototype._memSave = function(t) {
	this.mem.push(t);
	if (this.mem.length>this.memSize) this.mem.shift();
}

criztinaBot.prototype._memGet = function() {
	if (this.mem.length) {
		if (this.noRandom) return this.mem.shift();
		else {
			var n=Math.floor(Math.random()*this.mem.length);
			var rpl=this.mem[n];
			for (var i=n+1; i<this.mem.length; i++) this.mem[i-1]=this.mem[i];
			this.mem.length--;
			return rpl;
		}
	}
	else return '';
}

criztinaBot.prototype.getFinal = function() {
	if (!criztinaBot.prototype.global.criztinaFinals) return '';
	return criztinaFinals[Math.floor(Math.random()*criztinaFinals.length)];
}

criztinaBot.prototype.getInitial = function() {
	if (!criztinaBot.prototype.global.criztinaInitials) return '';
	return criztinaInitials[Math.floor(Math.random()*criztinaInitials.length)];
}



// eof