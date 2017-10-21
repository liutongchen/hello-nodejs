const EventEmitter = require('events');

class PetSounds extends EventEmitter {
    execute(asyncFunc, ...arg) {
        console.time('execute');
        this.emit('begin');
        asyncFunc(...arg, (err, sound) => {
            if (err) {
                return this.emit('error', err);
            }
            this.emit('sound', sound);
            console.timeEnd('execute');
            this.emit('end');
        });
    }
}

const dogSound = new PetSounds();
dogSound.on('begin', () => console.log('About to begin'));
dogSound.on('error', (err) => console.log(err));
dogSound.on('sound', (sound) => console.log(sound));
dogSound.on('end', () => console.log('This is the end'));

const allowBarkAfterOneSec = () => setTimeout(() => true, 1000);
const notAllowBarkAtAll = () => false;


async function dogBark(sound, noSound) {
    let ownerPermission;
    try {
        ownerPermission= await allowBarkAfterOneSec();
        return sound;
    } catch {
        ownerPermission = await notAllowBarkAtAll();
        return noSound;
    }
}

dogSound.execute(dogBark, 'Wangwangwang', '...');