# Adinkra
Adinkra are symbols that represent concepts or aphorisms. Adinkra are used extensively in fabrics and pottery among the Ashantis of Ashanti Kingdom and the baoules who historically migrated to Ghana.

The symbols have a decorative function but also represent objects that encapsulate evocative messages that convey traditional wisdom, aspects of life or the environment.

## The API

> Check it out live [here](https://adinkra.herokuapp.com)

### Endpoints

- GET /
- GET /symbols

#### Query Parameters

The /symbols route accepts the query parameters name, meaning and synopsis for returning specific symbols that match those searches.

To get all symbols with 'Nyame' in the name, you would send /symbols?name=Nyame

To get all symbols with 'star' in the meaning you would send /symbols?meaning=star
Same for star in the synopsis if you follow my drift.

You can also combine query params. 
/symbols?name=Nyame&meaning=heavens&synopsis=courage will return all symbols than contain 'Nyame' in the name or 'heaven' in the meaning or 'courage' in the synopsis.
