

$(document).ready(function () {
    var client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt")

    client.on("connect", function () {
        console.log("Successfully connected!");
    })

    client.on("message", function (topic, payload) {
        console.log([topic, payload].join(": "));
        client.end();
    })

    $(".btnOn").click(function(){
        client.publish("christian/device/status", "Turned On! "+moment().format('llll'));
        $("#status").html("The device is currently ON");
    }); 

    $(".btnOff").click(function(){
        client.publish("christian/device/status", "Turned Off! "+moment().format('llll'));
        $("#status").html("The device is currently OFF");
    }); 

})




