import 'mocha';
import { assert, expect } from 'chai';

import Foo from './index';

describe('Foo ::', () => {

    describe('ctor ::', () => {

        it('should create an instance of FOO', () => {
            const foo = new Foo('bar');
            
            expect(foo).to.be.an.instanceOf(Foo);
        })
    })

})