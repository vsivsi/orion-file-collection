## file-collection Storage Provider for Orion Filesystem

### Installation

Install the package
```
meteor add vsivsi:orion-file-collection
```

### Details

This package uses the Meteor
[vsivsi:file-collection](https://atmospherejs.com/vsivsi/file-collection)
package to provide file upload and storage in the mongoDB instance using gridFS.

Built-in Chunked upload support is provided using the stable and popular
[resumable.js](http://resumablejs.com/) library.

In this initial version, there are no rules limiting the type or size of
files, or restricting the roles of users to upload and remove files.

### Why file-collection?

This package was inspired by another Orion filesystem gridFS package
[orion-gridFS](https://github.com/brightbind/orion-gridFS), but differs
significantly in implementation, as that package uses
[CollectionFS](https://github.com/CollectionFS/Meteor-CollectionFS) instead of
file-collection.

file-collection differs from CollectionFS in that it exclusively and directly
supports MongoDB gridFS, whereas CollectionFS supports a variety of backing
stores as well as many other powerful features.

This difference is significant in that file-collection is a much lighter weight
package, and is able to be more efficient by eliminating the generality and
indirection that CollectionFS requires to support multiple storage technologies.
For example, CollectionFS maintains six MongoDB collections to support gridFS,
but file-collection only uses three: one for file locking (which CollectionFS
doesn't support), and the other two to implement gridFS itself. Likewise,
CollectionFS always needs to copy file data after it is uploaded, where
file-collection does not because it is streamed directly into the form that
gridFS expects.

This is not to bash on CollectionFS, it is a great and feature filled package
that is justifiably very popular, but given that Orion's filesystem package
already provides a general abstraction for files within the CMS, the additional
generality provided by CollectionFS is largely wasted in this application. And
that generality doesn't come cheaply... Below is the list of packages that are
addedto your application when orion-gridFS + CollectionFS are added!

```
brightbind:orion-gridfs  added, version 0.1.0
cfs:access-point         added, version 0.1.49
cfs:base-package         added, version 0.0.30
cfs:collection           added, version 0.5.5
cfs:collection-filters   added, version 0.2.4
cfs:data-man             added, version 0.0.6
cfs:file                 added, version 0.1.17
cfs:gridfs               added, version 0.0.33
cfs:http-methods         added, version 0.0.29
cfs:http-publish         added, version 0.0.13
cfs:power-queue          added, version 0.9.11
cfs:reactive-list        added, version 0.0.9
cfs:reactive-property    added, version 0.0.4
cfs:standard-packages    added, version 0.5.9
cfs:storage-adapter      added, version 0.2.2
cfs:tempstore            added, version 0.1.5
cfs:upload-http          added, version 0.0.20
cfs:worker               added, version 0.1.4
mongo-livedata           added, version 1.0.8
raix:eventemitter        added, version 0.1.2
```

This orion-file-collection package adds only the necessary two:

```
vsivsi:file-collection        added, version 1.1.1
vsivsi:orion-file-collection  added, version 0.1.0
```
