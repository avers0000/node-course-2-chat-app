var expect = require('expect');

var {generateMessage} = require('./message');

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