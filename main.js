QueryData.js

A function to parse data from a query string

Created by Kate Morley - http://code.iamkate.com/ - and released under the terms
of the CC0 1.0 Universal legal code:

http://creativecommons.org/publicdomain/zero/1.0/legalcode

*/

/* Creates an object containing data parsed from the specified query string. The
 * parameters are:
 *
 * queryString        - the query string to parse. The query string may start
 *                      with a question mark, spaces may be encoded either as
 *                      plus signs or the escape sequence '%20', and both
 *                      ampersands and semicolons are permitted as separators.
 *                      This optional parameter defaults to query string from
 *                      the page URL.
 * preserveDuplicates - true if duplicate values should be preserved by storing
 *                      an array of values, and false if duplicates should
 *                      overwrite earler occurrences. This optional parameter
 *                      defaults to false.
 */
function QueryData(queryString, preserveDuplicates) {

      // if a query string wasn't specified, use the query string from the URL
    if (queryString == undefined) {
        queryString = location.search ? location.search : '';
      }

      // remove the leading question mark from the query string if it is present
      if (queryString.charAt(0) == '?') queryString = queryString.substring(1);

      // check whether the query string is empty
      if (queryString.length > 0){

        // replace plus signs in the query string with spaces
        queryString = queryString.replace(/\+/g, ' ');

        // split the query string around ampersands and semicolons
        var queryComponents = queryString.split(/[&;]/g);

        // loop over the query string components
        for (var index = 0; index < queryComponents.length; index ++){

          // extract this component's key-value pair
          var keyValuePair = queryComponents[index].split('=');
          var key          = decodeURIComponent(keyValuePair[0]);
          var value        = keyValuePair.length > 1
                           ? decodeURIComponent(keyValuePair[1])
                           : '';

          // check whether duplicates should be preserved
          if (preserveDuplicates){

            // create the value array if necessary and store the value
            if (!(key in this)) this[key] = [];
            this[key].push(value);

          }else{

            // store the value
            this[key] = value;

          }

        }

      }

}


//here we define two dictionaries that hold the appropriate url's for each code
var videoDict = {'vr':'https://flipgrid.com/d14a8d89',
'iot': 'https://flipgrid.com/ae24fa5d',
'egpu': 'https://flipgrid.com/db4f6361',
'raspi': 'https://flipgrid.com/ff394c78',
'drone': 'https://flipgrid.com/0c2acb4b', 
'cam': 'https://flipgrid.com/9bab0632',
'3dprint':'https://flipgrid.com/2f1db6b1'
};
var readDict = {'vr': 'https://app.box.com/s/b7cvq7jsqi5egedk2r561wg4flt11n5u', 
'iot': 'https://app.box.com/s/xgbsszc6rh0o0fh0qvda2v9r2tvckuj3',
  'egpu':'https://app.box.com/s/fpg3s80tz39d1mj89br7j86o8qzen541',
  'raspi':'https://app.box.com/s/2vg0r418uwoyt4gtke6h7xl8pizi3byh',
  'drone':'https://app.box.com/s/65gprmbqewvn50pibkgfm1iv0ukzbngd',
  'cam':'https://app.box.com/s/qucf5j2xxwkqecehn6mb5oipijc7rrgc',
  '3dprint':'https://app.box.com/s/5k0eehtm6qiierxmb4phr0bbnayiecd'
};


var getData = new QueryData();

videoURL = 'https://www.w3schools.com/js/js_htmldom_html.asp'
readURL = 'https://www.w3schools.com/js/js_htmldom_html.asp'

// check whether the 'debug' parameter was set
if ('tech' in getData){
    var videoURL = videoDict[getData.tech];
    var readURL = readDict[getData.tech];
   
    
}
//document.body.innerHTML = '<p> Hello <p>'
//document.body.innerHTML = '<p> ' + videoURL + readURL + ' </p>'


 document.body.innerHTML = document.body.innerHTML + '<a src = ' + videoURL + '> Do you like learning through video?</a><a src = ' + readURL + '>Or would you prefer to read?</a>';
console.log(videoURL)

