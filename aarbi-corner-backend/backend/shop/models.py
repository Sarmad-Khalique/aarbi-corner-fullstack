from django.db import models


# Create your models here.
class CollectionItem(models.Model):
    imageUrl = models.URLField()
    name = models.CharField(max_length=150)
    price = models.IntegerField()

    def __str__(self):
        return ','.join(map(str, [self.name, self.imageUrl, self.price]))


class Collection(models.Model):
    title = models.CharField(max_length=100)
    items = models.ManyToManyField(CollectionItem, related_name="items")
    imageUrl = models.URLField()

    def __str__(self):
        return self.title
