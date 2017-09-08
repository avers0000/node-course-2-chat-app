var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var message = generateMessage('from','text');
        expect(message.from).toEqual('from');
        expect(message).toInclude({
                from: 'from',
                text: 'text'
            });
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'From';
        var latitude = 15;
        var longitude = 19;
        var url = 'https://www.google.com/maps?q=15,19'
        var message = generateLocationMessage(from,latitude,longitude);
        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({
            from,
            url
        });
    });
});