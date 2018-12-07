

import { Subject } from 'rxjs';
import { pipe, filter, map } from 'rxjs/operators';

// step-1 : create Observable stream
//-----------------------------------------------------
const xtTrainingStream = new Subject();
//-----------------------------------------------------


// Trainer-module
//-----------------------------------------------------
let topics = ['javascript', 'react', 'redux', 'node.js', 'devops'];

let i = 0;
let interval = setInterval(() => {
    if (i < topics.length) {
        let topic = topics[i]
        if (topic !== "unknown") {
            xtTrainingStream.next(topic)  // propagate change
            console.log("TRAINER => propagated data change into stream");
        } else {
            xtTrainingStream.error('topic error')
        }
    } else {
        //
    }
    i++;
    if (i === topics.length) {
        xtTrainingStream.complete();
        clearInterval(interval)
    }
}, 1000);


//-----------------------------------------------------



// Noida-Participant-module
//-----------------------------------------------------

xtTrainingStream
    .pipe(map(topic => topic.toUpperCase()))
    .subscribe(
        topic => console.log("NOIDA => learning the topic " + topic),
        error => console.log("NOIDA => handling error : " + error),
        complete => console.log("NOIDA => thanks for session...")
    )

//-----------------------------------------------------




// Gurgaon-Participant-module
//-----------------------------------------------------

xtTrainingStream
    .pipe(filter(topic => topic !== "javascript"))
    .subscribe(
        topic => console.log("GURGAON => learning the topic " + topic),
        error => console.log("GURGAON => handling error : " + error),
        complete => console.log("GURGAON => thanks for session...")
    )

//-----------------------------------------------------


