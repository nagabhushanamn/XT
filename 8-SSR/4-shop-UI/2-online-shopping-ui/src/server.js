

import express from 'express';
import store from '../src/store'

const app = express();
app.use(express.static('public'))


app.get("/", (req, res) => {

    // render the App store static markup ins content variable
    let content = renderToString(
        <Provider store={store} >
            <App />
        </Provider>
    );

    res.send(content);

})


app.listen(process.env.PORT || 3000, () => {
    console.log("server started");
});