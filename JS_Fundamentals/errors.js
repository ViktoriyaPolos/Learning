function resolveErrorAndLaunch(error) {
    // throw new Error('Wathever error name we decide :)') // comenting this line to test the ones below, as to show we can put anything in here:
    // throw 10 
    // throw true 
    // throw 'message'
    throw {
        name: error.name,
        msg: error.message,
        date: new Date
    }
};

// throw is better explain in this example here: https://share.vidyard.com/watch/gMaWtS3ZMRipL6VYKcWLsF?

function printScreamingName(obj) {
    try {
    console.log(obj.nome.toUpperCase() + '!!!')
    } catch (e) {
        resolveErrorAndLaunch (e)
    } finally {
        console.log('Final')
    }
};
const obj = {name: 'Robert'};
printScreamingName(obj); // this will lead to an error because we have not defined name bur rather nome