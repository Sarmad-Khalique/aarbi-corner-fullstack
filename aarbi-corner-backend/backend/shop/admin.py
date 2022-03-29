from django.contrib import admin

from shop.models import Collection, CollectionItem

# Register your models here.
admin.site.register(Collection)

admin.site.register(CollectionItem)
