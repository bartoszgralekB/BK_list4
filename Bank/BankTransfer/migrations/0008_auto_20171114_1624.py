# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-11-14 15:24
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('BankTransfer', '0007_auto_20171114_1622'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='PendingTransferModel',
            new_name='PendingTransfer',
        ),
        migrations.RenameModel(
            old_name='BookedTransferModel',
            new_name='Transfer',
        ),
    ]