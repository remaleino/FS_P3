THIS API APP IS A STUDENT WORK. IT WILL BE A LANGUAGE CORPUS RUNNING NOW AT PORT 3000.
TO START THE APP, RUN 'node server.js'. AFTER STARTING APP IN HEROKU,
IT IS BETTER TO USE APP IN POSTMAN.
AT CURRENT MOMENT, USER CAN VIEW FOLLOWING ROUTES.

1. ADRESS: host:/3000/words/
   GET ALL ENTRIES IN THE DATABASE.
2. ADRESS: host:/3000/words/WORD_ID
   GET A ENTRIE FROM DATABASE BY USING THE ENTRIE'S ID.
3. ADDRESS: host:/3000/words/WORD_ID
   PATCH THE ENTRY BY SENDING A LIST WITH NEW JSON VALUES.
   EXAMPLE OF BODY: [{propName: 'PARAMETER_NAME', value: 'NEW VALUE'}]
4. ADDRESS: host:/3000/words/WORD_ID
   DELETE THE ENTRY FROM THE DATABASE.
5. ADDRESS: host:/3000/words/
   POST A NEW ENTRY TO THE DATABASE.
   EXAMPLE OF BODY (MUST BE JSON): {"word": "EXAMPLE_WORD", "pos": "PART_OF_SPEECH}
