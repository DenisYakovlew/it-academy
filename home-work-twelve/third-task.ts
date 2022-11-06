export class ObjectManipulator<Type> {

    constructor(protected obj: Type) {}

    public set<Key extends string, Value> (key: Key, value: Value): ObjectManipulator <Type & {[key in Key]: Value}> {
        return new ObjectManipulator({...this.obj, [key]: value}) as ObjectManipulator <Type & {[key in Key]: Value}> ;
    }

    public get<Key extends keyof Type>(key: Key): Type[Key] {
        return this.obj[key];
    }

    public delete<Key extends keyof Type>(key: Key): ObjectManipulator<Omit<Type, Key>> {
        const newObj = {...this.obj};
        delete newObj[key];
        return new ObjectManipulator(newObj);
    }

    public getObject(): Type {
        return this.obj;
    }
}

const newObject = new ObjectManipulator({})
.set('name', 'Igor')
.set('Age', 45)
.delete('Age')
.getObject()

console.log(newObject)