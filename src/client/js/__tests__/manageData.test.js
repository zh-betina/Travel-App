test('if the storageObject contains a key with a string containing "test"', ()=>{

  let storageObject = {
      'test1': 'text',
      'test2': 'text',
      'test3': 'text',
      'exception': 'text',
      'exception2': 'text'
    }

  let containsString = Object.keys(storageObject).some(key=>{
    return /test/.test(key);
  });

  expect(containsString).toBeTruthy()
});
