/*
 * Rule: There should be no syntax errors. (Duh.)
 */
CSSLint.addRule({

    //rule information
    id: "errors",
    name: "Parsing Errors",
    desc: "This rule looks for recoverable syntax errors.",
    
    //initialization
    init: function(parser, reporter){
    
        parser.addListener("error", function(event){
            reporter.error(event.message, event.line, event.col, this);
        });

    }

});