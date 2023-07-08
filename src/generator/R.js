import '../blocks/R';
import Blockly from 'blockly';
import 'blockly/javascript';


export const RGenerator = new Blockly.Generator('R');

RGenerator.ORDER_ATOMIC = 0;
RGenerator.ORDER_UNARY_POSTFIX = 1; // expr++ expr-- () [] .
RGenerator.ORDER_MEMBER = 1.2;         // . []
RGenerator.ORDER_UNARY_PREFIX = 2; // -expr !expr ~expr ++expr --expr
RGenerator.ORDER_MULTIPLICATIVE = 3; // * / % ~/
RGenerator.ORDER_ADDITIVE = 4; // + -
RGenerator.ORDER_LOGICAL_NOT = 4.4; // !
RGenerator.ORDER_SHIFT = 5; // << >>
RGenerator.ORDER_MODULUS = 5.3; // %
RGenerator.ORDER_RELATIONAL = 6; // is is! >= > <= <
RGenerator.ORDER_EQUALITY = 7; // === !== === !==
RGenerator.ORDER_BITWISE_AND = 8; // &
RGenerator.ORDER_BITWISE_XOR = 9; // ^
RGenerator.ORDER_BITWISE_OR = 10; // |
RGenerator.ORDER_LOGICAL_AND = 11; // &&
RGenerator.ORDER_LOGICAL_OR = 12; // ||
RGenerator.ORDER_CONDITIONAL = 13; // expr ? expr : expr
RGenerator.ORDER_ASSIGNMENT = 14; // = *= /= ~/= %= += -= <<= >>= &= ^= |=
RGenerator.ORDER_COMMA = 18; // ,
RGenerator.ORDER_FUNCTION_CALL = 90;
RGenerator.ORDER_NONE = 99;

RGenerator.scrub_ = function(block, code, thisOnly) {
  const nextBlock =
      block.nextConnection && block.nextConnection.targetBlock();
  if (nextBlock && !thisOnly) {
    return code + ',\n' + RGenerator.blockToCode(nextBlock);
  }
  return code;
};

// Kategorie Senseboxen

RGenerator['choose_box'] = function(block) {
  var number = block.getFieldValue('Number');
  var uniqueID = generateUniqueID(number);
  return [uniqueID, RGenerator.ORDER_ATOMIC];
};

function generateUniqueID(number) {
  // Logic to generate a unique ID based on the provided number
  if (number === '2') {
    return '615f2945c031ff001b117bae';
  } else if (number === '3') {
    return '615f295ac031ff001b118211';
  } else if (number === '5') {
    return '615f2964c031ff001b118911';
  } else if (number === '6') {
    return '615f2969c031ff001b118a3e';
  } else if (number === '10') {
    return '615f298fc031ff001b119a83';
  } else if (number === '11') {
    return '615f2994c031ff001b119d04';
  } else if (number === '12') {
    return '615f2999c031ff001b119efb';
  } else if (number === '13') {
    return '615f299fc031ff001b11a172';
  } else if (number === '14') {
    return '615f29a4c031ff001b11a396';
  } else if (number === '17') {
    return '615f29b4c031ff001b11a8cb';
  } else if (number === '18') {
    return '616015adc031ff001b713f7f';
  } else if (number === '19') {
    return '615f29bfc031ff001b11adcb';
  } else if (number === '20') {
    return '616015c4c031ff001b714683';
  } else if (number === '22') {
    return '616015cfc031ff001b7148d3';
  } else if (number === '23') {
    return '615f29d4c031ff001b11b5f1';
  } else if (number === '24') {
    return '616015d5c031ff001b714e93';
  } else if (number === '25') {
    return '615f29dec031ff001b11b9e4';
  } else if (number === '26') {
    return '616015dcc031ff001b715497';
  } else if (number === '28') {
    return '616015e4c031ff001b7156b4';
  } else if (number === '29') {
    return '615f29f3c031ff001b11c1a6';
  } else if (number === '30') {
    return '615f292bc031ff001b117192';
  } 
  
  return 'default_unique_id';
}

RGenerator['box_id'] = function(block) {
  const boxId = block.getFieldValue('String');
  return [boxId, RGenerator.ORDER_ATOMIC];
};

RGenerator['get_temperature_latest'] = function (block) {
  const boxId = RGenerator.valueToCode(
    block,
    'BOX_ID',
    RGenerator.ORDER_ATOMIC
  );
  const code =
  `fetchTemp <- function() {\n` +
  `  url <- "https://api.opensensemap.org/boxes/${boxId}/count/50"\n`+
  `  req <- fromJSON(paste0(url))\n` +
  `  req$sensors$lastMeasurement$value[[1]]\n` +
  `}\n\n` +
  `c(fetchTemp())\n`;

  return [code, RGenerator.ORDER_NONE];
};

RGenerator['get_humidity_latest'] = function(block) {
  const boxId = RGenerator.valueToCode(
    block,
    'BOX_ID',
    RGenerator.ORDER_ATOMIC
  );
  const code = 
  `fetchHumidity <- function() {\n` +
  `  url <- "https://api.opensensemap.org/boxes/${boxId}"\n`+
  `  req <- fromJSON(paste0(url))\n` +
  `  req$sensors$lastMeasurement$value[[2]]\n` +
  `}\n\n` +
  `c(fetchHumidity())\n`;

return [code, RGenerator.ORDER_NONE];
};

RGenerator['get_distanceLeft_latest'] = function(block) {
  const boxId = RGenerator.valueToCode(
    block,
    'BOX_ID',
    RGenerator.ORDER_ATOMIC
  );
  const code = 
  `fetchDistanceLeft <- function() {\n` +
  `  url <- "https://api.opensensemap.org/boxes/${boxId}"\n`+
  `  req <- fromJSON(paste0(url))\n` +
  `  req$sensors$lastMeasurement$value[[3]]\n` +
  `}\n\n` +
  `c(fetchDistanceLeft())\n`;

return [code, RGenerator.ORDER_NONE];
};

RGenerator['get_distanceRight_latest'] = function(block) {
  const boxId = RGenerator.valueToCode(
    block,
    'BOX_ID',
    RGenerator.ORDER_ATOMIC
  );
  const code = 
  `fetchDistanceRight <- function() {\n` +
  `  url <- "https://api.opensensemap.org/boxes/${boxId}"\n`+
  `  req <- fromJSON(paste0(url))\n` +
  `  req$sensors$lastMeasurement$value[[4]]\n` +
  `}\n\n` +
  `c(fetchDistanceRight())\n`;

return [code, RGenerator.ORDER_NONE];
};

RGenerator['get_PM10_latest'] = function(block) {
  const boxId = RGenerator.valueToCode(
    block,
    'BOX_ID',
    RGenerator.ORDER_ATOMIC
  );
  const code = 
  `fetchPM10 <- function() {\n` +
  `  url <- "https://api.opensensemap.org/boxes/${boxId}"\n`+
  `  req <- fromJSON(paste0(url))\n` +
  `  req$sensors$lastMeasurement$value[[5]]\n` +
  `}\n\n` +
  `c(fetchPM10())\n`;

return [code, RGenerator.ORDER_NONE];
};
RGenerator['get_PM25_latest'] = function(block) {
  const boxId = RGenerator.valueToCode(
    block,
    'BOX_ID',
    RGenerator.ORDER_ATOMIC
  );
  const code = 
  `fetchPM25 <- function() {\n` +
  `  url <- "https://api.opensensemap.org/boxes/${boxId}"\n`+
  `  req <- fromJSON(paste0(url))\n` +
  `  req$sensors$lastMeasurement$value[[6]]\n` +
  `}\n\n` +
  `c(fetchPM25())\n`;

return [code, RGenerator.ORDER_NONE];
};

RGenerator['get_accelerationX_latest'] = function(block) {
  const boxId = RGenerator.valueToCode(
    block,
    'BOX_ID',
    RGenerator.ORDER_ATOMIC
  );
  const code = 
  `fetchAccelerationX <- function() {\n` +
  `  url <- "https://api.opensensemap.org/boxes/${boxId}"\n`+
  `  req <- fromJSON(paste0(url))\n` +
  `  req$sensors$lastMeasurement$value[[7]]\n` +
  `}\n\n` +
  `c(fetchAccelerationX())\n`;

return [code, RGenerator.ORDER_NONE];
};

RGenerator['get_accelerationY_latest'] = function(block) {
  const boxId = RGenerator.valueToCode(
    block,
    'BOX_ID',
    RGenerator.ORDER_ATOMIC
  );
  const code = 
  `fetchAccelerationY <- function() {\n` +
  `  url <- "https://api.opensensemap.org/boxes/${boxId}"\n`+
  `  req <- fromJSON(paste0(url))\n` +
  `  req$sensors$lastMeasurement$value[[8]]\n` +
  `}\n\n` +
  `c(fetchAccelerationY())\n`;

return [code, RGenerator.ORDER_NONE];
};

RGenerator['get_accelerationZ_latest'] = function(block) {
  const boxId = RGenerator.valueToCode(
    block,
    'BOX_ID',
    RGenerator.ORDER_ATOMIC
  );
  const code = 
  `fetchAccelerationZ <- function() {\n` +
  `  url <- "https://api.opensensemap.org/boxes/${boxId}"\n`+
  `  req <- fromJSON(paste0(url))\n` +
  `  req$sensors$lastMeasurement$value[[9]]\n` +
  `}\n\n` +
  `c(fetchAccelerationZ())\n`;

return [code, RGenerator.ORDER_NONE];
};

RGenerator['get_speed_latest'] = function(block) {
  const boxId = RGenerator.valueToCode(
    block,
    'BOX_ID',
    RGenerator.ORDER_ATOMIC
  );
  const code = 
  `fetchSpeed <- function() {\n` +
  `  url <- "https://api.opensensemap.org/boxes/${boxId}"\n`+
  `  req <- fromJSON(paste0(url))\n` +
  `  req$sensors$lastMeasurement$value[[10]]\n` +
  `}\n\n` +
  `c(fetchSpeed())\n`;

return [code, RGenerator.ORDER_NONE];
};

RGenerator['get_coordinates'] = function(block) {
  const boxId = RGenerator.valueToCode(
    block,
    'BOX_ID',
    RGenerator.ORDER_ATOMIC
  );
  const code = 
  `fetchCoordinates <- function() {\n` +
  `  url <- "https://api.opensensemap.org/boxes/${boxId}"\n`+
  `  req <- fromJSON(paste0(url))\n` +
  `   coordinates <- req$currentLocation$coordinates\n` +
  `  lat <- coordinates[2] \n` +
  `  lon <- coordinates[1] \n` +
  `  list(lat = lat, lon = lon)  \n` +
  `}\n\n` +
  `c(fetchCoordinates())\n`;

return [code, RGenerator.ORDER_NONE];
};

// Kategorie Sensor-Anfragen

RGenerator['get_temperature'] = function(block) {
  const boxId = RGenerator.valueToCode(
    block,
    'BOX_ID',
    RGenerator.ORDER_ATOMIC
  );

  function generateSensorID(boxId) {
    // Logic to generate the Sensor ID based on the Box ID
    if (boxId === '615f2945c031ff001b117bae') {
      return '615f2945c031ff001b117bb7'; // Sensor ID for Box ID 2
    } else if (boxId === '615f295ac031ff001b118211') {
      return '615f295ac031ff001b11821a'; // Sensor ID for Box ID 3
    } else if (boxId === '615f2964c031ff001b118911') {
      return '615f2964c031ff001b11891a'; // Sensor ID for Box ID 5
    } else if (boxId === '615f2969c031ff001b118a3e') {
      return '615f2969c031ff001b118a47'; // Sensor ID for Box ID 6
    } else if (boxId === '615f298fc031ff001b119a83') {
      return '615f298fc031ff001b119a8c'; // Sensor ID for Box ID 10
    } else if (boxId === '615f2994c031ff001b119d04') {
      return '615f2994c031ff001b119d0d'; // Sensor ID for Box ID 11
    } else if (boxId === '615f2999c031ff001b119efb') {
      return '615f2999c031ff001b119f04'; // Sensor ID for Box ID 12
    } else if (boxId === '615f299fc031ff001b11a172') {
      return '615f299fc031ff001b11a17b'; // Sensor ID for Box ID 13
    } else if (boxId === '615f29a4c031ff001b11a396') {
      return '615f29a4c031ff001b11a39f'; // Sensor ID for Box ID 14
    } else if (boxId === '615f29b4c031ff001b11a8cb') {
      return '615f29b4c031ff001b11a8d4'; // Sensor ID for Box ID 17
    } else if (boxId === '616015adc031ff001b713f7f') {
      return '616015adc031ff001b713f88'; // Sensor ID for Box ID 18
    } else if (boxId === '615f29bfc031ff001b11adcb') {
      return '615f29bfc031ff001b11add4'; // Sensor ID for Box ID 19
    } else if (boxId === '616015c4c031ff001b714683') {
      return '616015c4c031ff001b71468c'; // Sensor ID for Box ID 20
    } else if (boxId === '616015cfc031ff001b7148d3') {
      return '616015cfc031ff001b7148dc'; // Sensor ID for Box ID 22
    } else if (boxId === '615f29d4c031ff001b11b5f1') {
      return '615f29d4c031ff001b11b5fa'; // Sensor ID for Box ID 23
    } else if (boxId === '616015d5c031ff001b714e93') {
      return '616015d5c031ff001b714e9c'; // Sensor ID for Box ID 24
    } else if (boxId === '615f29dec031ff001b11b9e4') {
      return '615f29dec031ff001b11b9ed'; // Sensor ID for Box ID 25
    } else if (boxId === '616015dcc031ff001b715497') {
      return '616015dcc031ff001b7154a0'; // Sensor ID for Box ID 26
    } else if (boxId === '616015e4c031ff001b7156b4') {
      return '616015e4c031ff001b7156bd'; // Sensor ID for Box ID 28
    } else if (boxId === '615f29f3c031ff001b11c1a6') {
      return '615f29f3c031ff001b11c1af'; // Sensor ID for Box ID 29
    } else if (boxId === '615f292bc031ff001b117192') {
      return '615f292bc031ff001b11719b'; // Sensor ID for Box ID 30
  }

    return 'default_sensor_id';
  }

  const sensorId = generateSensorID(boxId);
  if (sensorId === 'default_sensor_id') {
    // Handle the case when the Box ID doesn't have a corresponding Sensor ID
    throw new Error("Invalid Box ID");
  }

  const url =
    `url <- "https://api.opensensemap.org/boxes/${boxId}/data/${sensorId}?from-date=2023-07-04T15:00:00.000Z&to-date=2023-07-04T15:15:00.000Z&format=json"\n`;

  const code =
    `fetchTemperature <- function() {
      ${url}
      req <- httr::GET(url)

      if (httr::status_code(req) == 200) {
        res <- httr::content(req, as = "parsed", encoding = "UTF-8")

        temperatureValues <- vector()

        for (measurement in res) {
          if (!is.null(measurement$value)) {
            temperature <- measurement$value
            temperatureValues <- c(temperatureValues, temperature)
          }
        }

        return(temperatureValues)
      }
    }

    temperatureData <- fetchTemperature()\n`;

  return code;
};

RGenerator['get_humidity'] = function(block) {
  const boxId = RGenerator.valueToCode(
    block,
    'BOX_ID',
    RGenerator.ORDER_ATOMIC
  );

  function generateSensorID(boxId) {
    // Logic to generate the Sensor ID based on the Box ID
    if (boxId === '615f2945c031ff001b117bae') {
      return '615f2945c031ff001b117bb6'; // Sensor ID for Box ID 2
    } else if (boxId === '615f295ac031ff001b118211') {
      return '615f295ac031ff001b118219'; // Sensor ID for Box ID 3
    } else if (boxId === '615f2964c031ff001b118911') {
      return '615f2964c031ff001b118919'; // Sensor ID for Box ID 5
    } else if (boxId === '615f2969c031ff001b118a3e') {
      return '615f2969c031ff001b118a46'; // Sensor ID for Box ID 6
    } else if (boxId === '615f298fc031ff001b119a83') {
      return '615f298fc031ff001b119a8b'; // Sensor ID for Box ID 10
    } else if (boxId === '615f2994c031ff001b119d04') {
      return '615f2994c031ff001b119d0c'; // Sensor ID for Box ID 11
    } else if (boxId === '615f2999c031ff001b119efb') {
      return '615f2999c031ff001b119f03'; // Sensor ID for Box ID 12
    } else if (boxId === '615f299fc031ff001b11a172') {
      return '615f299fc031ff001b11a17a'; // Sensor ID for Box ID 13
    } else if (boxId === '615f29a4c031ff001b11a396') {
      return '615f29a4c031ff001b11a39e'; // Sensor ID for Box ID 14
    } else if (boxId === '615f29b4c031ff001b11a8cb') {
      return '615f29b4c031ff001b11a8d3'; // Sensor ID for Box ID 17
    } else if (boxId === '616015adc031ff001b713f7f') {
      return '616015adc031ff001b713f87'; // Sensor ID for Box ID 18
    } else if (boxId === '615f29bfc031ff001b11adcb') {
      return '615f29bfc031ff001b11add3'; // Sensor ID for Box ID 19
    } else if (boxId === '616015c4c031ff001b714683') {
      return '616015c4c031ff001b71468b'; // Sensor ID for Box ID 20
    } else if (boxId === '616015cfc031ff001b7148d3') {
      return '616015cfc031ff001b7148db'; // Sensor ID for Box ID 22
    } else if (boxId === '615f29d4c031ff001b11b5f1') {
      return '615f29d4c031ff001b11b5f9'; // Sensor ID for Box ID 23
    } else if (boxId === '616015d5c031ff001b714e93') {
      return '616015d5c031ff001b714e9b'; // Sensor ID for Box ID 24
    } else if (boxId === '615f29dec031ff001b11b9e4') {
      return '615f29dec031ff001b11b9ec'; // Sensor ID for Box ID 25
    } else if (boxId === '616015dcc031ff001b715497') {
      return '616015dcc031ff001b71549f'; // Sensor ID for Box ID 26
    } else if (boxId === '616015e4c031ff001b7156b4') {
      return '616015e4c031ff001b7156bc'; // Sensor ID for Box ID 28
    } else if (boxId === '615f29f3c031ff001b11c1a6') {
      return '615f29f3c031ff001b11c1ae'; // Sensor ID for Box ID 29
    } else if (boxId === '615f292bc031ff001b117192') {
      return '615f292bc031ff001b11719a'; // Sensor ID for Box ID 30
  }

    return 'default_sensor_id';
  }

  const sensorId = generateSensorID(boxId);
  if (sensorId === 'default_sensor_id') {
    // Handle the case when the Box ID doesn't have a corresponding Sensor ID
    throw new Error("Invalid Box ID");
  }

  const url =
    `url <- "https://api.opensensemap.org/boxes/${boxId}/data/${sensorId}?from-date=2023-07-04T15:00:00.000Z&to-date=2023-07-04T15:15:00.000Z&format=json"\n`;

  const code =
    `fetchHumidity <- function() {
      ${url}
      req <- httr::GET(url)

      if (httr::status_code(req) == 200) {
        res <- httr::content(req, as = "parsed", encoding = "UTF-8")

        humidityValues <- vector()

        for (measurement in res) {
          if (!is.null(measurement$value)) {
            humidity <- measurement$value
            humidityValues <- c(humidityValues, humidity)
          }
        }

        return(humidityValues)
      }
    }

    humidityData <- fetchHumidity()\n`;

  return code;
};

RGenerator['get_distanceLeft'] = function(block) {
  const boxId = RGenerator.valueToCode(
    block,
    'BOX_ID',
    RGenerator.ORDER_ATOMIC
  );

  function generateSensorID(boxId) {
    // Logic to generate the Sensor ID based on the Box ID
    if (boxId === '615f2945c031ff001b117bae') {
      return '615f2945c031ff001b117bb5'; // Sensor ID for Box ID 2
    } else if (boxId === '615f295ac031ff001b118211') {
      return '615f295ac031ff001b118218'; // Sensor ID for Box ID 3
    } else if (boxId === '615f2964c031ff001b118911') {
      return '615f2964c031ff001b118918'; // Sensor ID for Box ID 5
    } else if (boxId === '615f2969c031ff001b118a3e') {
      return '615f2969c031ff001b118a45'; // Sensor ID for Box ID 6
    } else if (boxId === '615f298fc031ff001b119a83') {
      return '615f298fc031ff001b119a8a'; // Sensor ID for Box ID 10
    } else if (boxId === '615f2994c031ff001b119d04') {
      return '615f2994c031ff001b119d0b'; // Sensor ID for Box ID 11
    } else if (boxId === '615f2999c031ff001b119efb') {
      return '615f2999c031ff001b119f02'; // Sensor ID for Box ID 12
    } else if (boxId === '615f299fc031ff001b11a172') {
      return '615f299fc031ff001b11a179'; // Sensor ID for Box ID 13
    } else if (boxId === '615f29a4c031ff001b11a396') {
      return '615f29a4c031ff001b11a39d'; // Sensor ID for Box ID 14
    } else if (boxId === '615f29b4c031ff001b11a8cb') {
      return '615f29b4c031ff001b11a8d2'; // Sensor ID for Box ID 17
    } else if (boxId === '616015adc031ff001b713f7f') {
      return '616015adc031ff001b713f86'; // Sensor ID for Box ID 18
    } else if (boxId === '615f29bfc031ff001b11adcb') {
      return '615f29bfc031ff001b11add2'; // Sensor ID for Box ID 19
    } else if (boxId === '616015c4c031ff001b714683') {
      return '616015c4c031ff001b71468a'; // Sensor ID for Box ID 20
    } else if (boxId === '616015cfc031ff001b7148d3') {
      return '616015cfc031ff001b7148da'; // Sensor ID for Box ID 22
    } else if (boxId === '615f29d4c031ff001b11b5f1') {
      return '615f29d4c031ff001b11b5f8'; // Sensor ID for Box ID 23
    } else if (boxId === '616015d5c031ff001b714e93') {
      return '616015d5c031ff001b714e9a'; // Sensor ID for Box ID 24
    } else if (boxId === '615f29dec031ff001b11b9e4') {
      return '615f29dec031ff001b11b9eb'; // Sensor ID for Box ID 25
    } else if (boxId === '616015dcc031ff001b715497') {
      return '616015dcc031ff001b71549e'; // Sensor ID for Box ID 26
    } else if (boxId === '616015e4c031ff001b7156b4') {
      return '616015e4c031ff001b7156bb'; // Sensor ID for Box ID 28
    } else if (boxId === '615f29f3c031ff001b11c1a6') {
      return '615f29f3c031ff001b11c1ad'; // Sensor ID for Box ID 29
    } else if (boxId === '615f292bc031ff001b117192') {
      return '615f292bc031ff001b117199'; // Sensor ID for Box ID 30
  }

    return 'default_sensor_id';
  }

  const sensorId = generateSensorID(boxId);
  if (sensorId === 'default_sensor_id') {
    // Handle the case when the Box ID doesn't have a corresponding Sensor ID
    throw new Error("Invalid Box ID");
  }

  const url =
    `url <- "https://api.opensensemap.org/boxes/${boxId}/data/${sensorId}?from-date=2023-07-04T15:00:00.000Z&to-date=2023-07-04T15:15:00.000Z&format=json"\n`;

  const code =
    `fetchDistanceLeft <- function() {
      ${url}
      req <- httr::GET(url)

      if (httr::status_code(req) == 200) {
        res <- httr::content(req, as = "parsed", encoding = "UTF-8")

        distanceLeftValues <- vector()

        for (measurement in res) {
          if (!is.null(measurement$value)) {
            distanceLeft <- measurement$value
            distanceLeftValues <- c(distanceLeftValues, distanceLeft)
          }
        }

        return(distanceLeftValues)
      }
    }

    distanceLeftData <- fetchDistanceLeft()\n`;

  return code;
};

RGenerator['get_distanceRight'] = function(block) {
  const boxId = RGenerator.valueToCode(
    block,
    'BOX_ID',
    RGenerator.ORDER_ATOMIC
  );

  function generateSensorID(boxId) {
    // Logic to generate the Sensor ID based on the Box ID
    if (boxId === '615f2945c031ff001b117bae') {
      return '615f2945c031ff001b117bb4'; // Sensor ID for Box ID 2
    } else if (boxId === '615f295ac031ff001b118211') {
      return '615f295ac031ff001b118217'; // Sensor ID for Box ID 3
    } else if (boxId === '615f2964c031ff001b118911') {
      return '615f2964c031ff001b118917'; // Sensor ID for Box ID 5
    } else if (boxId === '615f2969c031ff001b118a3e') {
      return '615f2969c031ff001b118a44'; // Sensor ID for Box ID 6
    } else if (boxId === '615f298fc031ff001b119a83') {
      return '615f298fc031ff001b119a89'; // Sensor ID for Box ID 10
    } else if (boxId === '615f2994c031ff001b119d04') {
      return '615f2994c031ff001b119d0a'; // Sensor ID for Box ID 11
    } else if (boxId === '615f2999c031ff001b119efb') {
      return '615f2999c031ff001b119f01'; // Sensor ID for Box ID 12
    } else if (boxId === '615f299fc031ff001b11a172') {
      return '615f299fc031ff001b11a178'; // Sensor ID for Box ID 13
    } else if (boxId === '615f29a4c031ff001b11a396') {
      return '615f29a4c031ff001b11a39c'; // Sensor ID for Box ID 14
    } else if (boxId === '615f29b4c031ff001b11a8cb') {
      return '615f29b4c031ff001b11a8d1'; // Sensor ID for Box ID 17
    } else if (boxId === '616015adc031ff001b713f7f') {
      return '616015adc031ff001b713f85'; // Sensor ID for Box ID 18
    } else if (boxId === '615f29bfc031ff001b11adcb') {
      return '615f29bfc031ff001b11add1'; // Sensor ID for Box ID 19
    } else if (boxId === '616015c4c031ff001b714683') {
      return '616015c4c031ff001b714689'; // Sensor ID for Box ID 20
    } else if (boxId === '616015cfc031ff001b7148d3') {
      return '616015cfc031ff001b7148d9'; // Sensor ID for Box ID 22
    } else if (boxId === '615f29d4c031ff001b11b5f1') {
      return '615f29d4c031ff001b11b5f7'; // Sensor ID for Box ID 23
    } else if (boxId === '616015d5c031ff001b714e93') {
      return '616015d5c031ff001b714e99'; // Sensor ID for Box ID 24
    } else if (boxId === '615f29dec031ff001b11b9e4') {
      return '615f29dec031ff001b11b9ea'; // Sensor ID for Box ID 25
    } else if (boxId === '616015dcc031ff001b715497') {
      return '616015dcc031ff001b71549d'; // Sensor ID for Box ID 26
    } else if (boxId === '616015e4c031ff001b7156b4') {
      return '616015e4c031ff001b7156ba'; // Sensor ID for Box ID 28
    } else if (boxId === '615f29f3c031ff001b11c1a6') {
      return '615f29f3c031ff001b11c1aca'; // Sensor ID for Box ID 29
    } else if (boxId === '615f292bc031ff001b117192') {
      return '615f292bc031ff001b117198'; // Sensor ID for Box ID 30
  }

    return 'default_sensor_id';
  }

  const sensorId = generateSensorID(boxId);
  if (sensorId === 'default_sensor_id') {
    // Handle the case when the Box ID doesn't have a corresponding Sensor ID
    throw new Error("Invalid Box ID");
  }

  const url =
    `url <- "https://api.opensensemap.org/boxes/${boxId}/data/${sensorId}?from-date=2023-07-04T15:00:00.000Z&to-date=2023-07-04T15:15:00.000Z&format=json"\n`;

  const code =
    `fetchDistanceRight <- function() {
      ${url}
      req <- httr::GET(url)

      if (httr::status_code(req) == 200) {
        res <- httr::content(req, as = "parsed", encoding = "UTF-8")

        distanceRightValues <- vector()

        for (measurement in res) {
          if (!is.null(measurement$value)) {
            distanceRight <- measurement$value
            distanceRightValues <- c(distanceRightValues, distanceRight)
          }
        }

        return(distanceRightValues)
      }
    }

    distanceRightData <- fetchDistanceRight()\n`;

  return code;
};

RGenerator['get_PM10'] = function(block) {
  const boxId = RGenerator.valueToCode(
    block,
    'BOX_ID',
    RGenerator.ORDER_ATOMIC
  );

  function generateSensorID(boxId) {
    // Logic to generate the Sensor ID based on the Box ID
    if (boxId === '615f2945c031ff001b117bae') {
      return '615f2945c031ff001b117bb3'; // Sensor ID for Box ID 2
    } else if (boxId === '615f295ac031ff001b118211') {
      return '15f295ac031ff001b118216'; // Sensor ID for Box ID 3
    } else if (boxId === '615f2964c031ff001b118911') {
      return '615f2964c031ff001b118916'; // Sensor ID for Box ID 5
    } else if (boxId === '615f2969c031ff001b118a3e') {
      return '615f2969c031ff001b118a43'; // Sensor ID for Box ID 6
    } else if (boxId === '615f298fc031ff001b119a83') {
      return '615f298fc031ff001b119a88'; // Sensor ID for Box ID 10
    } else if (boxId === '615f2994c031ff001b119d04') {
      return '615f2994c031ff001b119d09'; // Sensor ID for Box ID 11
    } else if (boxId === '615f2999c031ff001b119efb') {
      return '615f2999c031ff001b119f00'; // Sensor ID for Box ID 12
    } else if (boxId === '615f299fc031ff001b11a172') {
      return '615f299fc031ff001b11a177'; // Sensor ID for Box ID 13
    } else if (boxId === '615f29a4c031ff001b11a396') {
      return '615f29a4c031ff001b11a39b'; // Sensor ID for Box ID 14
    } else if (boxId === '615f29b4c031ff001b11a8cb') {
      return '615f29b4c031ff001b11a8d0'; // Sensor ID for Box ID 17
    } else if (boxId === '616015adc031ff001b713f7f') {
      return '616015adc031ff001b713f84'; // Sensor ID for Box ID 18
    } else if (boxId === '615f29bfc031ff001b11adcb') {
      return '615f29bfc031ff001b11add0'; // Sensor ID for Box ID 19
    } else if (boxId === '616015c4c031ff001b714683') {
      return '616015c4c031ff001b714688'; // Sensor ID for Box ID 20
    } else if (boxId === '616015cfc031ff001b7148d3') {
      return '616015cfc031ff001b7148d8'; // Sensor ID for Box ID 22
    } else if (boxId === '615f29d4c031ff001b11b5f1') {
      return '615f29d4c031ff001b11b5f6'; // Sensor ID for Box ID 23
    } else if (boxId === '616015d5c031ff001b714e93') {
      return '616015d5c031ff001b714e98'; // Sensor ID for Box ID 24
    } else if (boxId === '615f29dec031ff001b11b9e4') {
      return '615f29dec031ff001b11b9e9'; // Sensor ID for Box ID 25
    } else if (boxId === '616015dcc031ff001b715497') {
      return '616015dcc031ff001b71549c'; // Sensor ID for Box ID 26
    } else if (boxId === '616015e4c031ff001b7156b4') {
      return '616015e4c031ff001b7156b9'; // Sensor ID for Box ID 28
    } else if (boxId === '615f29f3c031ff001b11c1a6') {
      return '615f29f3c031ff001b11c1ab'; // Sensor ID for Box ID 29
    } else if (boxId === '615f292bc031ff001b117192') {
      return '615f292bc031ff001b117197'; // Sensor ID for Box ID 30
  }

    return 'default_sensor_id';
  }

  const sensorId = generateSensorID(boxId);
  if (sensorId === 'default_sensor_id') {
    // Handle the case when the Box ID doesn't have a corresponding Sensor ID
    throw new Error("Invalid Box ID");
  }

  const url =
    `url <- "https://api.opensensemap.org/boxes/${boxId}/data/${sensorId}?from-date=2023-07-04T15:00:00.000Z&to-date=2023-07-04T15:15:00.000Z&format=json"\n`;

  const code =
    `fetchPM10 <- function() {
      ${url}
      req <- httr::GET(url)

      if (httr::status_code(req) == 200) {
        res <- httr::content(req, as = "parsed", encoding = "UTF-8")

        PM10Values <- vector()

        for (measurement in res) {
          if (!is.null(measurement$value)) {
            PM10 <- measurement$value
            PM10Values <- c(PM10Values, PM10)
          }
        }

        return(PM10Values)
      }

      # Handle the case when the request is not successful or the temperature data is not available
      return(NULL)
    }

    PM10Data <- fetchPM10()\n`;

  return code;
};

RGenerator['get_PM25'] = function(block) {
  const boxId = RGenerator.valueToCode(
    block,
    'BOX_ID',
    RGenerator.ORDER_ATOMIC
  );

  function generateSensorID(boxId) {
    // Logic to generate the Sensor ID based on the Box ID
    if (boxId === '615f2945c031ff001b117bae') {
      return '615f2945c031ff001b117bb2'; // Sensor ID for Box ID 2
    } else if (boxId === '615f295ac031ff001b118211') {
      return '615f295ac031ff001b118215'; // Sensor ID for Box ID 3
    } else if (boxId === '615f2964c031ff001b118911') {
      return '615f2964c031ff001b118915'; // Sensor ID for Box ID 5
    } else if (boxId === '615f2969c031ff001b118a3e') {
      return '615f2969c031ff001b118a42'; // Sensor ID for Box ID 6
    } else if (boxId === '615f298fc031ff001b119a83') {
      return '615f298fc031ff001b119a87'; // Sensor ID for Box ID 10
    } else if (boxId === '615f2994c031ff001b119d04') {
      return '615f2994c031ff001b119d08'; // Sensor ID for Box ID 11
    } else if (boxId === '615f2999c031ff001b119efb') {
      return '615f2999c031ff001b119eff'; // Sensor ID for Box ID 12
    } else if (boxId === '615f299fc031ff001b11a172') {
      return '615f299fc031ff001b11a176'; // Sensor ID for Box ID 13
    } else if (boxId === '615f29a4c031ff001b11a396') {
      return '615f29a4c031ff001b11a39a'; // Sensor ID for Box ID 14
    } else if (boxId === '615f29b4c031ff001b11a8cb') {
      return '615f29b4c031ff001b11a8cf'; // Sensor ID for Box ID 17
    } else if (boxId === '616015adc031ff001b713f7f') {
      return '616015adc031ff001b713f83'; // Sensor ID for Box ID 18
    } else if (boxId === '615f29bfc031ff001b11adcb') {
      return '615f29bfc031ff001b11adcf'; // Sensor ID for Box ID 19
    } else if (boxId === '616015c4c031ff001b714683') {
      return '616015c4c031ff001b714687'; // Sensor ID for Box ID 20
    } else if (boxId === '616015cfc031ff001b7148d3') {
      return '616015cfc031ff001b7148d7'; // Sensor ID for Box ID 22
    } else if (boxId === '615f29d4c031ff001b11b5f1') {
      return '615f29d4c031ff001b11b5f5'; // Sensor ID for Box ID 23
    } else if (boxId === '616015d5c031ff001b714e93') {
      return '616015d5c031ff001b714e97'; // Sensor ID for Box ID 24
    } else if (boxId === '615f29dec031ff001b11b9e4') {
      return '615f29dec031ff001b11b9e8'; // Sensor ID for Box ID 25
    } else if (boxId === '616015dcc031ff001b715497') {
      return '616015dcc031ff001b71549b'; // Sensor ID for Box ID 26
    } else if (boxId === '616015e4c031ff001b7156b4') {
      return '616015e4c031ff001b7156b8'; // Sensor ID for Box ID 28
    } else if (boxId === '615f29f3c031ff001b11c1a6') {
      return '615f29f3c031ff001b11c1aa'; // Sensor ID for Box ID 29
    } else if (boxId === '615f292bc031ff001b117192') {
      return '615f292bc031ff001b117196'; // Sensor ID for Box ID 30
  }

    return 'default_sensor_id';
  }

  const sensorId = generateSensorID(boxId);
  if (sensorId === 'default_sensor_id') {
    // Handle the case when the Box ID doesn't have a corresponding Sensor ID
    throw new Error("Invalid Box ID");
  }

  const url =
    `url <- "https://api.opensensemap.org/boxes/${boxId}/data/${sensorId}?from-date=2023-07-04T15:00:00.000Z&to-date=2023-07-04T15:15:00.000Z&format=json"\n`;

  const code =
    `fetchPM25 <- function() {
      ${url}
      req <- httr::GET(url)

      if (httr::status_code(req) == 200) {
        res <- httr::content(req, as = "parsed", encoding = "UTF-8")

        PM25Values <- vector()

        for (measurement in res) {
          if (!is.null(measurement$value)) {
            PM25 <- measurement$value
            PM25Values <- c(PM25Values, PM25)
          }
        }

        return(PM25Values)
      }
    }

    PM25Data <- fetchPM25()\n`;

  return code;
};

RGenerator['get_accelerationX'] = function(block) {
  const boxId = RGenerator.valueToCode(
    block,
    'BOX_ID',
    RGenerator.ORDER_ATOMIC
  );

  function generateSensorID(boxId) {
    // Logic to generate the Sensor ID based on the Box ID
    if (boxId === '615f2945c031ff001b117bae') {
      return '615f2945c031ff001b117bb1'; // Sensor ID for Box ID 2
    } else if (boxId === '615f295ac031ff001b118211') {
      return '615f295ac031ff001b118214'; // Sensor ID for Box ID 3
    } else if (boxId === '615f2964c031ff001b118911') {
      return '615f2964c031ff001b118914'; // Sensor ID for Box ID 5
    } else if (boxId === '615f2969c031ff001b118a3e') {
      return '615f2969c031ff001b118a41'; // Sensor ID for Box ID 6
    } else if (boxId === '615f298fc031ff001b119a83') {
      return '615f298fc031ff001b119a86'; // Sensor ID for Box ID 10
    } else if (boxId === '615f2994c031ff001b119d04') {
      return '615f2994c031ff001b119d07'; // Sensor ID for Box ID 11
    } else if (boxId === '615f2999c031ff001b119efb') {
      return '615f2999c031ff001b119efe'; // Sensor ID for Box ID 12
    } else if (boxId === '615f299fc031ff001b11a172') {
      return '615f299fc031ff001b11a175'; // Sensor ID for Box ID 13
    } else if (boxId === '615f29a4c031ff001b11a396') {
      return '615f29a4c031ff001b11a399'; // Sensor ID for Box ID 14
    } else if (boxId === '615f29b4c031ff001b11a8cb') {
      return '615f29b4c031ff001b11a8ce'; // Sensor ID for Box ID 17
    } else if (boxId === '616015adc031ff001b713f7f') {
      return '616015adc031ff001b713f82'; // Sensor ID for Box ID 18
    } else if (boxId === '615f29bfc031ff001b11adcb') {
      return '615f29bfc031ff001b11adce'; // Sensor ID for Box ID 19
    } else if (boxId === '616015c4c031ff001b714683') {
      return '616015c4c031ff001b714686'; // Sensor ID for Box ID 20
    } else if (boxId === '616015cfc031ff001b7148d3') {
      return '616015cfc031ff001b7148d6'; // Sensor ID for Box ID 22
    } else if (boxId === '615f29d4c031ff001b11b5f1') {
      return '615f29d4c031ff001b11b5f4'; // Sensor ID for Box ID 23
    } else if (boxId === '616015d5c031ff001b714e93') {
      return '616015d5c031ff001b714e96'; // Sensor ID for Box ID 24
    } else if (boxId === '615f29dec031ff001b11b9e4') {
      return '615f29dec031ff001b11b9e7'; // Sensor ID for Box ID 25
    } else if (boxId === '616015dcc031ff001b715497') {
      return '616015dcc031ff001b71549a'; // Sensor ID for Box ID 26
    } else if (boxId === '616015e4c031ff001b7156b4') {
      return '616015e4c031ff001b7156b7'; // Sensor ID for Box ID 28
    } else if (boxId === '615f29f3c031ff001b11c1a6') {
      return '615f29f3c031ff001b11c1a9'; // Sensor ID for Box ID 29
    } else if (boxId === '615f292bc031ff001b117192') {
      return '615f292bc031ff001b117195'; // Sensor ID for Box ID 30
  }

    return 'default_sensor_id';
  }

  const sensorId = generateSensorID(boxId);
  if (sensorId === 'default_sensor_id') {
    // Handle the case when the Box ID doesn't have a corresponding Sensor ID
    throw new Error("Invalid Box ID");
  }

  const url =
    `url <- "https://api.opensensemap.org/boxes/${boxId}/data/${sensorId}?from-date=2023-07-04T15:00:00.000Z&to-date=2023-07-04T15:15:00.000Z&format=json"\n`;

  const code =
    `fetchAccelerationX <- function() {
      ${url}
      req <- httr::GET(url)

      if (httr::status_code(req) == 200) {
        res <- httr::content(req, as = "parsed", encoding = "UTF-8")

        accelerationXValues <- vector()

        for (measurement in res) {
          if (!is.null(measurement$value)) {
            accelerationX <- measurement$value
            accelerationXValues <- c(accelerationXValues, accelerationX)
          }
        }

        return(accelerationXValues)
      }
    }

    accelerationXData <- fetchAccelerationX()\n`;

  return code;
};

RGenerator['get_accelerationY'] = function(block) {
  const boxId = RGenerator.valueToCode(
    block,
    'BOX_ID',
    RGenerator.ORDER_ATOMIC
  );

  function generateSensorID(boxId) {
    // Logic to generate the Sensor ID based on the Box ID
    if (boxId === '615f2945c031ff001b117bae') {
      return '615f2945c031ff001b117bb0'; // Sensor ID for Box ID 2
    } else if (boxId === '615f295ac031ff001b118211') {
      return '615f295ac031ff001b118213'; // Sensor ID for Box ID 3
    } else if (boxId === '615f2964c031ff001b118911') {
      return '615f2964c031ff001b118913'; // Sensor ID for Box ID 5
    } else if (boxId === '615f2969c031ff001b118a3e') {
      return '615f2969c031ff001b118a40'; // Sensor ID for Box ID 6
    } else if (boxId === '615f298fc031ff001b119a83') {
      return '615f298fc031ff001b119a85'; // Sensor ID for Box ID 10
    } else if (boxId === '615f2994c031ff001b119d04') {
      return '615f2994c031ff001b119d06'; // Sensor ID for Box ID 11
    } else if (boxId === '615f2999c031ff001b119efb') {
      return '615f2999c031ff001b119efd'; // Sensor ID for Box ID 12
    } else if (boxId === '615f299fc031ff001b11a172') {
      return '615f299fc031ff001b11a174"'; // Sensor ID for Box ID 13
    } else if (boxId === '615f29a4c031ff001b11a396') {
      return '615f29a4c031ff001b11a398'; // Sensor ID for Box ID 14
    } else if (boxId === '615f29b4c031ff001b11a8cb') {
      return '615f29b4c031ff001b11a8cd'; // Sensor ID for Box ID 17
    } else if (boxId === '616015adc031ff001b713f7f') {
      return '616015adc031ff001b713f81'; // Sensor ID for Box ID 18
    } else if (boxId === '615f29bfc031ff001b11adcb') {
      return '615f29bfc031ff001b11adcd'; // Sensor ID for Box ID 19
    } else if (boxId === '616015c4c031ff001b714683') {
      return '616015c4c031ff001b714685'; // Sensor ID for Box ID 20
    } else if (boxId === '616015cfc031ff001b7148d3') {
      return '616015cfc031ff001b7148d5'; // Sensor ID for Box ID 22
    } else if (boxId === '615f29d4c031ff001b11b5f1') {
      return '615f29d4c031ff001b11b5f3'; // Sensor ID for Box ID 23
    } else if (boxId === '616015d5c031ff001b714e93') {
      return '616015d5c031ff001b714e95'; // Sensor ID for Box ID 24
    } else if (boxId === '615f29dec031ff001b11b9e4') {
      return '615f29dec031ff001b11b9e6'; // Sensor ID for Box ID 25
    } else if (boxId === '616015dcc031ff001b715497') {
      return '616015dcc031ff001b715499'; // Sensor ID for Box ID 26
    } else if (boxId === '616015e4c031ff001b7156b4') {
      return '616015e4c031ff001b7156b6'; // Sensor ID for Box ID 28
    } else if (boxId === '615f29f3c031ff001b11c1a6') {
      return '615f29f3c031ff001b11c1a8'; // Sensor ID for Box ID 29
    } else if (boxId === '615f292bc031ff001b117192') {
      return '615f292bc031ff001b117194'; // Sensor ID for Box ID 30
  }

    return 'default_sensor_id';
  }

  const sensorId = generateSensorID(boxId);
  if (sensorId === 'default_sensor_id') {
    // Handle the case when the Box ID doesn't have a corresponding Sensor ID
    throw new Error("Invalid Box ID");
  }

  const url =
    `url <- "https://api.opensensemap.org/boxes/${boxId}/data/${sensorId}?from-date=2023-07-04T15:00:00.000Z&to-date=2023-07-04T15:15:00.000Z&format=json"\n`;

  const code =
    `fetchAccelerationY <- function() {
      ${url}
      req <- httr::GET(url)

      if (httr::status_code(req) == 200) {
        res <- httr::content(req, as = "parsed", encoding = "UTF-8")

        accelerationYValues <- vector()

        for (measurement in res) {
          if (!is.null(measurement$value)) {
            accelerationY <- measurement$value
            accelerationYValues <- c(accelerationYValues, accelerationY)
          }
        }

        return(accelerationYValues)
      }
    }

    accelerationYData <- fetchAccelerationY()\n`;

  return code;
};

RGenerator['get_accelerationZ'] = function(block) {
  const boxId = RGenerator.valueToCode(
    block,
    'BOX_ID',
    RGenerator.ORDER_ATOMIC
  );

  function generateSensorID(boxId) {
    // Logic to generate the Sensor ID based on the Box ID
    if (boxId === '615f2945c031ff001b117bae') {
      return '615f2945c031ff001b117baf'; // Sensor ID for Box ID 2
    } else if (boxId === '615f295ac031ff001b118211') {
      return '615f295ac031ff001b118212'; // Sensor ID for Box ID 3
    } else if (boxId === '615f2964c031ff001b118911') {
      return '615f2964c031ff001b118912'; // Sensor ID for Box ID 5
    } else if (boxId === '615f2969c031ff001b118a3e') {
      return '615f2969c031ff001b118a3f'; // Sensor ID for Box ID 6
    } else if (boxId === '615f298fc031ff001b119a83') {
      return '615f298fc031ff001b119a84'; // Sensor ID for Box ID 10
    } else if (boxId === '615f2994c031ff001b119d04') {
      return '615f2994c031ff001b119d05'; // Sensor ID for Box ID 11
    } else if (boxId === '615f2999c031ff001b119efb') {
      return '615f2999c031ff001b119efc'; // Sensor ID for Box ID 12
    } else if (boxId === '615f299fc031ff001b11a172') {
      return '615f299fc031ff001b11a173'; // Sensor ID for Box ID 13
    } else if (boxId === '615f29a4c031ff001b11a396') {
      return '615f29a4c031ff001b11a397'; // Sensor ID for Box ID 14
    } else if (boxId === '615f29b4c031ff001b11a8cb') {
      return '615f29b4c031ff001b11a8cc'; // Sensor ID for Box ID 17
    } else if (boxId === '616015adc031ff001b713f7f') {
      return '616015adc031ff001b713f80'; // Sensor ID for Box ID 18
    } else if (boxId === '615f29bfc031ff001b11adcb') {
      return '615f29bfc031ff001b11adcc'; // Sensor ID for Box ID 19
    } else if (boxId === '616015c4c031ff001b714683') {
      return '616015c4c031ff001b714684'; // Sensor ID for Box ID 20
    } else if (boxId === '616015cfc031ff001b7148d3') {
      return '616015cfc031ff001b7148d4'; // Sensor ID for Box ID 22
    } else if (boxId === '615f29d4c031ff001b11b5f1') {
      return '615f29d4c031ff001b11b5f2'; // Sensor ID for Box ID 23
    } else if (boxId === '616015d5c031ff001b714e93') {
      return '616015d5c031ff001b714e94'; // Sensor ID for Box ID 24
    } else if (boxId === '615f29dec031ff001b11b9e4') {
      return '615f29dec031ff001b11b9e5'; // Sensor ID for Box ID 25
    } else if (boxId === '616015dcc031ff001b715497') {
      return '616015dcc031ff001b715498'; // Sensor ID for Box ID 26
    } else if (boxId === '616015e4c031ff001b7156b4') {
      return '616015e4c031ff001b7156b5'; // Sensor ID for Box ID 28
    } else if (boxId === '615f29f3c031ff001b11c1a6') {
      return '615f29f3c031ff001b11c1a7'; // Sensor ID for Box ID 29
    } else if (boxId === '615f292bc031ff001b117192') {
      return '615f292bc031ff001b117193'; // Sensor ID for Box ID 30
  }

    return 'default_sensor_id';
  }

  const sensorId = generateSensorID(boxId);
  if (sensorId === 'default_sensor_id') {
    // Handle the case when the Box ID doesn't have a corresponding Sensor ID
    throw new Error("Invalid Box ID");
  }

  const url =
    `url <- "https://api.opensensemap.org/boxes/${boxId}/data/${sensorId}?from-date=2023-07-04T15:00:00.000Z&to-date=2023-07-04T15:15:00.000Z&format=json"\n`;

  const code =
    `fetchAccelerationZ <- function() {
      ${url}
      req <- httr::GET(url)

      if (httr::status_code(req) == 200) {
        res <- httr::content(req, as = "parsed", encoding = "UTF-8")

        accelerationZValues <- vector()

        for (measurement in res) {
          if (!is.null(measurement$value)) {
            accelerationZ <- measurement$value
            accelerationZValues <- c(accelerationZValues, accelerationZ)
          }
        }

        return(accelerationZValues)
      }
    }

    accelerationZData <- fetchAccelerationZ()\n`;

  return code;
};

RGenerator['get_speed'] = function(block) {
  const boxId = RGenerator.valueToCode(
    block,
    'BOX_ID',
    RGenerator.ORDER_ATOMIC
  );

  function generateSensorID(boxId) {
    // Logic to generate the Sensor ID based on the Box ID
    if (boxId === '615f2945c031ff001b117bae') {
      return '616031a9c031ff001b7c42b0'; // Sensor ID for Box ID 2
    } else if (boxId === '615f295ac031ff001b118211') {
      return '6176c99c8b4e03001b68af6f'; // Sensor ID for Box ID 3
    } else if (boxId === '615f2964c031ff001b118911') {
      return '616032a7c031ff001b7ca746'; // Sensor ID for Box ID 5
    } else if (boxId === '615f2969c031ff001b118a3e') {
      return '61603307c031ff001b7ccd7a'; // Sensor ID for Box ID 6
    } else if (boxId === '615f298fc031ff001b119a83') {
      return '616034cdc031ff001b7d82f5'; // Sensor ID for Box ID 10
    } else if (boxId === '615f2994c031ff001b119d04') {
      return '61603547c031ff001b7daab8'; // Sensor ID for Box ID 11
    } else if (boxId === '615f2999c031ff001b119efb') {
      return '616035a1c031ff001b7dd35e'; // Sensor ID for Box ID 12
    } else if (boxId === '615f299fc031ff001b11a172') {
      return '61603609c031ff001b7dff4c'; // Sensor ID for Box ID 13
    } else if (boxId === '615f29a4c031ff001b11a396') {
      return '61603653c031ff001b7e17a0'; // Sensor ID for Box ID 14
    } else if (boxId === '615f29b4c031ff001b11a8cb') {
      return '6160b9e6bc3fba001be437b1'; // Sensor ID for Box ID 17
    } else if (boxId === '616015adc031ff001b713f7f') {
      return '6160ba45bc3fba001be45cf1'; // Sensor ID for Box ID 18
    } else if (boxId === '615f29bfc031ff001b11adcb') {
      return '6160bababc3fba001be487dd'; // Sensor ID for Box ID 19
    } else if (boxId === '616015c4c031ff001b714683') {
      return '6160bb23bc3fba001be4b0ba'; // Sensor ID for Box ID 20
    } else if (boxId === '616015cfc031ff001b7148d3') {
      return '6160bbc6bc3fba001be4f063'; // Sensor ID for Box ID 22
    } else if (boxId === '615f29d4c031ff001b11b5f1') {
      return '6160bc12bc3fba001be50c9e'; // Sensor ID for Box ID 23
    } else if (boxId === '616015d5c031ff001b714e93') {
      return '6160bc5dbc3fba001be52bed'; // Sensor ID for Box ID 24
    } else if (boxId === '615f29dec031ff001b11b9e4') {
      return '6160bca8bc3fba001be5485c'; // Sensor ID for Box ID 25
    } else if (boxId === '616015dcc031ff001b715497') {
      return '6160bcefbc3fba001be5671b'; // Sensor ID for Box ID 26
    } else if (boxId === '616015e4c031ff001b7156b4') {
      return '6160bd85bc3fba001be5a3ab'; // Sensor ID for Box ID 28
    } else if (boxId === '615f29f3c031ff001b11c1a6') {
      return '6160bdd4bc3fba001be5c277'; // Sensor ID for Box ID 29
    } else if (boxId === '615f292bc031ff001b117192') {
      return '6160be20bc3fba001be5e1ae'; // Sensor ID for Box ID 30
  }

    return 'default_sensor_id';
  }

  const sensorId = generateSensorID(boxId);
  if (sensorId === 'default_sensor_id') {
    // Handle the case when the Box ID doesn't have a corresponding Sensor ID
    throw new Error("Invalid Box ID");
  }

  const url =
    `url <- "https://api.opensensemap.org/boxes/${boxId}/data/${sensorId}?from-date=2023-07-04T15:00:00.000Z&to-date=2023-07-04T15:15:00.000Z&format=json"\n`;

  const code =
    `fetchSpeed <- function() {
      ${url}
      req <- httr::GET(url)

      if (httr::status_code(req) == 200) {
        res <- httr::content(req, as = "parsed", encoding = "UTF-8")

        speedValues <- vector()

        for (measurement in res) {
          if (!is.null(measurement$value)) {
            speed <- measurement$value
            speedValues <- c(speedValues, speed)
          }
        }

        return(speedValues)
      }
    }

    speedData <- fetchSpeed()\n`;

  return code;
};


// Kategorie Listen und Text 

RGenerator['lists_create_with'] = function(block) {
  var elements = new Array(block.itemCount_);
  for (var i = 0; i < block.itemCount_; i++) {
    elements[i] = RGenerator.valueToCode(block, 'ADD' + i, RGenerator.ORDER_NONE) || 'NULL';
  }

  var code = 'c(' + elements.join(', ') + ')';
  
  for(var i = 0; i < elements.length; i++){
    if(/^c\(/.test(elements[i])){
      code = 'cbind(' + elements.join(', ') + ')';
    }
  }

  return [code, RGenerator.ORDER_ATOMIC];
};

RGenerator['lists_create_with_container'] = function(block) {
  var code = '';
  return code;
};

RGenerator['lists_create_with_item'] = function(block) {
  var code = '';
  return code;
};

RGenerator['string_length'] = function(block) {
  // String or array length.
  var text = RGenerator.valueToCode(block, 'String',
  RGenerator.ORDER_MEMBER) || '\'\'';
  var result = 'nchar(' + "'" + text + "'" + ')';
  //return ['nchar(' + text + ')', RGenerator.ORDER_MEMBER];
  return result;
};

RGenerator['string_input'] = function(block) {
  var string = block.getFieldValue('String');
  return [string, RGenerator.ORDER_ATOMIC];
};

RGenerator['print'] = function(block) {
  var value = RGenerator.valueToCode(block, 'VALUE', RGenerator.ORDER_NONE) || '';
  var code = 'print(' + value + ')\n';
  return code;
};

// Kategorie Operationen 

RGenerator['load_libraries'] = function(block) {
  var code = 'library(jsonlite)\nlibrary(httr)\nlibrary(ggplot2)\nlibrary(ggpubr)\nlibrary(tidyverse)\nlibrary(broom)\nlibrary(AICcmodavg)';
  return code;
};

RGenerator['save_variable'] = function(block) {
  var data = RGenerator.valueToCode(block, 'DATA', RGenerator.ORDER_ATOMIC);
  var variableName = RGenerator.valueToCode(block, 'VARIABLE_NAME', RGenerator.ORDER_ATOMIC);
  var code = variableName + ' <- ' + data + '\n';
  return code;
};

RGenerator['save_as_array'] = function(block) {
  const value = RGenerator.valueToCode(block, 'VALUE', RGenerator.ORDER_ATOMIC) || '';
  const array = RGenerator.valueToCode(block, 'ARRAY', RGenerator.ORDER_ATOMIC) || '';
  const code = `${array} <- c(${array}, ${value})\n`;
  return code;
};

RGenerator['lists_sort'] = function(block) {
  var list = RGenerator.valueToCode(block, 'LIST', RGenerator.ORDER_ATOMIC) || '[]';
  var order = block.getFieldValue('ORDER');
  var code = '';

  if (order === 'ASCENDING') {
    code = 'sort(' + list + ')';
  } else if (order === 'DESCENDING') {
    code = 'sort(' + list + ', decreasing = TRUE)';
  }

  return [code, RGenerator.ORDER_ATOMIC];
};

RGenerator['convert_data_type'] = function(block) {
  var value = RGenerator.valueToCode(block, 'VALUE', RGenerator.ORDER_ATOMIC);
  var dataType = block.getFieldValue('TYPE');
  
  var code = dataType + '(' + value + ')';
  
  return [code, RGenerator.ORDER_ATOMIC];
};


// Kategorie Mathematik 

RGenerator['number'] = function(block) {
  var value = block.getFieldValue('VALUE');
  return [value, RGenerator.ORDER_ATOMIC];
};

RGenerator['array_input'] = function(block) {
  const array = block.getFieldValue('ARRAY').split(',').map(element => element.trim()).join(', ');
  
  const code = `c(${array})`;
  return [code, RGenerator.ORDER_ATOMIC];
};

RGenerator['matrix'] = function(block) {
  var rows = RGenerator.valueToCode(block, 'ROWS', RGenerator.ORDER_ATOMIC) || '0';
  var cols = RGenerator.valueToCode(block, 'COLS', RGenerator.ORDER_ATOMIC) || '0';
  var values = RGenerator.valueToCode(block, 'VALUES', RGenerator.ORDER_ATOMIC) || 'NULL';

  var code = 'matrix(c(' + values + '), nrow = ' + rows + ', ncol = ' + cols + ')';
  return [code, RGenerator.ORDER_ATOMIC];
};

RGenerator['arithmetic'] = function(block) {
  var left = RGenerator.valueToCode(block, 'LEFT', RGenerator.ORDER_ATOMIC) || '0';
  var operator = block.getFieldValue('OPERATOR');
  var right = RGenerator.valueToCode(block, 'RIGHT', RGenerator.ORDER_ATOMIC) || '0';

  var code = left + ' ' + operator + ' ' + right;
  return [code, RGenerator.ORDER_ATOMIC];
};

RGenerator['round_number'] = function(block) {
  var number = RGenerator.valueToCode(block, 'NUMBER', RGenerator.ORDER_NONE) || '';

  var code = 'round(' + number + ', 1)';

  return [code, RGenerator.ORDER_ATOMIC];
};

RGenerator['square_root'] = function(block) {
  var number = RGenerator.valueToCode(block, 'NUMBER', RGenerator.ORDER_NONE) || '';

  var code = 'sqrt(' + number + ')';

  return [code, RGenerator.ORDER_ATOMIC];
};

RGenerator['max_min'] = function(block) {
  var func = block.getFieldValue('FUNCTION');
  var values = RGenerator.valueToCode(block, 'VALUES', RGenerator.ORDER_ATOMIC) || 'NULL';

  var code = func + '(' + values + ')';
  return [code, RGenerator.ORDER_ATOMIC];
};

// Kategorie Logik

RGenerator['boolean'] = function(block) {
  var value = block.getFieldValue('VALUE');
  return [value, RGenerator.ORDER_ATOMIC];
};

RGenerator['logic_operations'] = function(block) {
  var operator = block.getFieldValue('OPERATOR');
  var a = RGenerator.valueToCode(block, 'A', RGenerator.ORDER_NONE) || '';
  var b = RGenerator.valueToCode(block, 'B', RGenerator.ORDER_NONE) || '';

  var code = '';

  if (operator === '!') {
    code = operator + ' ' + a;
  } else {
    code = a + ' ' + operator + ' ' + b;
  }

  return [code, RGenerator.ORDER_LOGICAL];
};

RGenerator['comparison'] = function(block) {
  var left = RGenerator.valueToCode(block, 'LEFT', RGenerator.ORDER_NONE) || '';
  var operator = block.getFieldValue('OPERATOR');
  var right = RGenerator.valueToCode(block, 'RIGHT', RGenerator.ORDER_NONE) || '';

  var code = left + ' ' + operator + ' ' + right;

  // Add parentheses to improve readability
  if (operator === '>=' || operator === '<=' || operator === '!=' || operator === '==') {
    code = '(' + code + ')';
  }

  return [code, RGenerator.ORDER_RELATIONAL];
};

RGenerator['if_else'] = function(block) {
  var conditionType = block.getFieldValue('CONDITION_TYPE');
  var condition = RGenerator.valueToCode(block, 'CONDITION', RGenerator.ORDER_NONE) || 'FALSE';
  var ifBody = RGenerator.statementToCode(block, 'IF_BODY');

  var code = '';
  if (conditionType === 'IF') {
    code += 'if (' + condition + ') {\n' + ifBody + '}\n';
  } else if (conditionType === 'ELSEIF') {
    code += 'else if (' + condition + ') {\n' + ifBody + '}\n';
  } else if (conditionType === 'ELSE') {
    code += 'else {\n' + ifBody + '}\n';
  }
  
  return code;
};

// Kategorie Datenanalyse

RGenerator['mean'] = function(block) {
  var data = RGenerator.valueToCode(block, 'DATA', RGenerator.ORDER_ATOMIC);
  var code = 'mean(' + data + ')';
  return [code, RGenerator.ORDER_ATOMIC];
};

RGenerator['median'] = function(block) {
  var data = RGenerator.valueToCode(block, 'DATA', RGenerator.ORDER_ATOMIC);
  var code = 'median(' + data + ')';
  return [code, RGenerator.ORDER_ATOMIC];
};

RGenerator['sd'] = function(block) {
  var data = RGenerator.valueToCode(block, 'DATA', RGenerator.ORDER_ATOMIC);
  var code = 'sd(' + data + ')';
  return [code, RGenerator.ORDER_ATOMIC];
};

RGenerator['summary'] = function(block) {
  var code = '';
  for (var i = 0; i < block.itemCount_; i++) {
    var data = RGenerator.valueToCode(block, 'INPUT' + i, RGenerator.ORDER_ATOMIC);
    code += 'summary(' + data + ')\n';
  }
  return code;
};

RGenerator['moving_average'] = function(block) {
  var arrayInput = RGenerator.valueToCode(block, 'ARRAY', RGenerator.ORDER_ATOMIC);
  var windowSizeInput = RGenerator.valueToCode(block, 'WINDOW_SIZE', RGenerator.ORDER_ATOMIC);

  var code =
    'simple_moving_average(' + arrayInput + ', ' + windowSizeInput + ')';

  return [code, RGenerator.ORDER_NONE];
};

RGenerator['lm'] = function(block) {
  var yVariable = RGenerator.valueToCode(block, 'Y', RGenerator.ORDER_ATOMIC);
  var xVariable = RGenerator.valueToCode(block, 'X', RGenerator.ORDER_ATOMIC);

  var code = 'model <- lm(' + yVariable + ' ~ ' + xVariable + ')\n';
  return [code, RGenerator.ORDER_NONE];
};

RGenerator['anova'] = function(block) {
  var code = 'result <- anova(';
  var groups = [];

  for (var i = 0; i < block.itemCount_; i++) {
    var values = RGenerator.valueToCode(block, 'GROUP' + i, RGenerator.ORDER_ATOMIC) || 'NULL';
    groups.push(values);
  }

  code += groups.join(', ') + ')\n';
  code += 'summary(result)\n';

  return code;
};



RGenerator['correlation_analysis'] = function(block) {
  var var1 = RGenerator.valueToCode(block, 'VAR1', RGenerator.ORDER_ATOMIC);
  var var2 = RGenerator.valueToCode(block, 'VAR2', RGenerator.ORDER_ATOMIC);
  var method = block.getFieldValue('METHOD');
  
  var code = 'cor.test(' + var1 + ', ' + var2 + ', method = "' + method + '")$estimate\n';
  return code;
};

RGenerator['one_sample_t_test'] = function(block) {
  var sample = RGenerator.valueToCode(block, 'SAMPLE', RGenerator.ORDER_ATOMIC) || 'NULL';
  var populationMean = RGenerator.valueToCode(block, 'POPULATION_MEAN', RGenerator.ORDER_ATOMIC) || 'NULL';

  var code = 't.test(' + sample + ', mu = ' + populationMean + ')$p.value';
  return code;
};

RGenerator['two_sample_t_test'] = function(block) {
  var sample1 = RGenerator.valueToCode(block, 'SAMPLE_1', RGenerator.ORDER_ATOMIC) || 'NULL';
  var sample2 = RGenerator.valueToCode(block, 'SAMPLE_2', RGenerator.ORDER_ATOMIC) || 'NULL';

  var code = 't.test(' + sample1 + ', ' + sample2 + ')$p.value';
  return code;
};

// Kategorie Datenvisualisierung

RGenerator['boxplot'] = function(block) {
  var data = RGenerator.valueToCode(block, 'DATA', RGenerator.ORDER_ATOMIC);
  var title = block.getFieldValue('TITLE');
  var xLabel = block.getFieldValue('X_LABEL');
  var yLabel = block.getFieldValue('Y_LABEL');
  
  var code = 'boxplot(' + data + ', main = "' + title + '", xlab = "' + xLabel + '", ylab = "' + yLabel + '")\n';
  return code;
};

RGenerator['scatter_plot'] = function(block) {
  var xValues = RGenerator.valueToCode(block, 'X_VALUES', RGenerator.ORDER_ATOMIC) || 'NULL';
  var yValues = RGenerator.valueToCode(block, 'Y_VALUES', RGenerator.ORDER_ATOMIC) || 'NULL';
  var showLine = block.getFieldValue('SHOW_LINE') === 'TRUE';

  var code = 'plot(' + xValues + ', ' + yValues + ', pch = 19, frame = FALSE)\n';
  if (showLine) {
    code += 'abline(lm(' + yValues + ' ~ ' + xValues + '), col = "blue")\n';
  }
  return code;
};

RGenerator['bar_chart'] = function(block) {
  var data = RGenerator.valueToCode(block, 'DATA', RGenerator.ORDER_ATOMIC);
  var xLabel = RGenerator.valueToCode(block, 'X_AXIS', RGenerator.ORDER_ATOMIC);
  var yLabel = RGenerator.valueToCode(block, 'Y_AXIS', RGenerator.ORDER_ATOMIC);
  var code = 'barplot(' + data + ', xlab=' + xLabel + ', ylab=' + yLabel + ')';
  return code;
};

RGenerator['line_chart'] = function(block) {
  var data = RGenerator.valueToCode(block, 'DATA', RGenerator.ORDER_ATOMIC);
  var xLabel = RGenerator.valueToCode(block, 'X_AXIS', RGenerator.ORDER_ATOMIC);
  var yLabel = RGenerator.valueToCode(block, 'Y_AXIS', RGenerator.ORDER_ATOMIC);
  var code = 'plot(' + data + ', type="l", xlab=' + xLabel + ', ylab=' + yLabel + ')';
  return code;
};

RGenerator['histogram'] = function(block) {
  var data = RGenerator.valueToCode(block, 'DATA', RGenerator.ORDER_ATOMIC);
  var title = block.getFieldValue('TITLE');
  var xLabel = block.getFieldValue('X_LABEL');
  var yLabel = block.getFieldValue('Y_LABEL');
  
  var code = 'hist(' + data + ', main = "' + title + '", xlab = "' + xLabel + '", ylab = "' + yLabel + '")\n';
  return code;
};

RGenerator['heatmap'] = function(block) {
  var data = RGenerator.valueToCode(block, 'DATA', RGenerator.ORDER_ATOMIC);
  var colorScheme = block.getFieldValue('COLOR_SCHEME');
  
  var code = 'heatmap(' + data + ', col = "' + colorScheme + '")\n';
  return code;
};

RGenerator['display_table'] = function(block) {
  var data = RGenerator.valueToCode(block, 'DATA', RGenerator.ORDER_ATOMIC) || '';

  var code = 'print(as.data.frame(' + data + '))\n';
  return code;
};

RGenerator['data_frame'] = function(block) {
  var code = 'data.frame(';
  var dataBlocks = block.getChildren('data_frame_data');
  for (var i = 0; i < dataBlocks.length; i++) {
    var dataBlock = dataBlocks[i];
    var name = RGenerator.valueToCode(dataBlock, 'NAME', RGenerator.ORDER_ATOMIC) || 'NULL';
    var vector = RGenerator.valueToCode(dataBlock, 'VECTOR', RGenerator.ORDER_ATOMIC) || 'NULL';
    if (i > 0) {
      code += ', ';
    }
    code += name + ' = ' + vector;
  }
  code += ')';
  return [code, RGenerator.ORDER_ATOMIC];
};






