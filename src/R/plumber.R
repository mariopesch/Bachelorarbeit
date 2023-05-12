library(plumber)

#* @apiTitle Blockly4R
#* @apiDescription Plumber API, um in Blockly generierten R code auszuführen

# plumber.R

#* Testfunktion
#* @param msg The message to echo back.
#* @get /echo
function(msg=""){
  list(msg = paste0("The message is: '", msg, "'"))
}