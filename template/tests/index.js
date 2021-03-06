/** Globals **/
// 
// newTest(userId?: string)
//    Creates a new test with a specific user [optional], if no user
//    is specified then a random one is created.
// 
// test(name: string, function: () => Promise<void>)
// 
// 
/** Test abilities **/
//
// See https://www.alana.tech for deeper documentation
// expectText(...)
// sendText(...)
// expectButtons(...)
// sendButtonClick(...)

test('echo', function(){
  return newTest()  // must return the test
    .expectText('Welcome to echo-bot, I\'ll echo back what you say')
    .expectText('I have some easter eggs too ;)')
    .sendText('hi')
    .expectText('hi')
    .sendText('alana')
    .expectText('alana')
    .run() // must call run() to signify end of tests
});

test('ping pong', function(){
  return newTest()
    .expectText('Welcome to echo-bot, I\'ll echo back what you say')
    .expectText('I have some easter eggs too ;)')
    .sendText('ping')
    .expectText('pong')
    .run();
});